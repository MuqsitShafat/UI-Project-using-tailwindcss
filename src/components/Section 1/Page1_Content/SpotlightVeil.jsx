import { useRef, useEffect } from "react";

const FOLLOW = 40;

const NAMED_EASES = {
  linear: [0, 0, 1, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
};

function cubicBezierEase(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const dX = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (p) => {
    let t = p;
    for (let i = 0; i < 8; i++) {
      const x = sampleX(t) - p;
      const d = dX(t);
      if (Math.abs(x) < 1e-4 || Math.abs(d) < 1e-6) break;
      t -= x / d;
    }
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return sampleY(t);
  };
}

function makeEase(ease) {
  if (Array.isArray(ease) && ease.length === 4)
    return cubicBezierEase(ease[0], ease[1], ease[2], ease[3]);
  const b = (typeof ease === "string" && NAMED_EASES[ease]) || NAMED_EASES.easeOut;
  return cubicBezierEase(b[0], b[1], b[2], b[3]);
}

const durationOf = (transition, fallback) =>
  typeof transition?.duration === "number" ? transition.duration : fallback;

function maskFor(x, y, size) {
  return `radial-gradient(circle ${size}px at ${x} ${y}, transparent 0px, rgba(0,0,0,1) ${size}px)`;
}

const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

/**
 * SpotlightVeil
 * Ported from the Originkit "Image Spotlight" component.
 * Wraps children (e.g. your carousel) with a cursor-following
 * spotlight veil. Does not touch the children's own styling/transitions.
 */
export default function SpotlightVeil({
  children,
  mode = "followCursor", // "followCursor" | "onImage"
  restX = 50,
  restY = 50,
  veilColor = "#171313",
  size = 380,
  visibility = 20,
  rounded = "9999px",
  transition = DEFAULT_TRANSITION,
  style,
}) {
  const rootRef = useRef(null);
  const veilRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const veil = veilRef.current;
    if (!root || !veil) return;

    function restingPoint() {
      return {
        x: (root.clientWidth * restX) / 100,
        y: (root.clientHeight * restY) / 100,
      };
    }

    function toLocal(event) {
      const bounds = root.getBoundingClientRect();
      const sx = bounds.width > 0 ? root.clientWidth / bounds.width : 1;
      const sy = bounds.height > 0 ? root.clientHeight / bounds.height : 1;
      return {
        x: (event.clientX - bounds.left) * sx,
        y: (event.clientY - bounds.top) * sy,
      };
    }

    const ease = makeEase(transition?.ease);
    const durMs = Math.max(0.001, durationOf(transition, 0.4)) * 1000;

    const current = restingPoint();
    const target = { ...current };
    let presence = mode === "onImage" ? 1 : 0;
    let animFrom = presence;
    let animTo = presence;
    let animStart = 0;
    let hovering = false;
    let raf = 0;
    let last = 0;
    let alive = true;

    function onMove(event) {
      const { x, y } = toLocal(event);
      if (!hovering && presence < 0.01) {
        current.x = x;
        current.y = y;
      }
      hovering = true;
      target.x = x;
      target.y = y;
    }

    function onLeave(event) {
      hovering = false;
      if (mode === "onImage") {
        const rest = restingPoint();
        target.x = rest.x;
        target.y = rest.y;
      } else {
        const { x, y } = toLocal(event);
        current.x = x;
        current.y = y;
        target.x = x;
        target.y = y;
      }
    }

    function frame(time) {
      if (!alive) return;
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 1 / 60;
      last = time;
      const follow = 1 - Math.pow(1 - FOLLOW / 100, dt * 60);
      current.x += (target.x - current.x) * follow;
      current.y += (target.y - current.y) * follow;

      const want = mode === "onImage" || hovering ? 1 : 0;
      if (want !== animTo) {
        animFrom = presence;
        animTo = want;
        animStart = time;
      }
      const p = Math.min(1, (time - animStart) / durMs);
      presence = animFrom + (animTo - animFrom) * ease(p);

      const radius = size * presence;
      if (radius < 0.5) {
        veil.style.maskImage = "none";
        veil.style.webkitMaskImage = "none";
      } else {
        const mask = maskFor(`${current.x}px`, `${current.y}px`, radius);
        veil.style.maskImage = mask;
        veil.style.webkitMaskImage = mask;
      }
      raf = requestAnimationFrame(frame);
    }

    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        if (hovering) return;
        const rest = restingPoint();
        target.x = rest.x;
        target.y = rest.y;
      });
      ro.observe(root);
    }

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [size, mode, restX, restY, JSON.stringify(transition)]);

  const restingMask =
    mode === "onImage" ? maskFor(`${restX}%`, `${restY}%`, size) : "none";

  return (
    <div
      ref={rootRef}
      style={{ ...style, position: "relative", width: "100%", height: "100%" }}
    >
      {children}
      <div
        ref={veilRef}
        style={{
          position: "absolute",
          inset: 0,
          background: veilColor,
          opacity: 1 - visibility / 100,
          borderRadius: rounded,
          pointerEvents: "none",
          maskImage: restingMask,
          WebkitMaskImage: restingMask,
        }}
      />
    </div>
  );
}