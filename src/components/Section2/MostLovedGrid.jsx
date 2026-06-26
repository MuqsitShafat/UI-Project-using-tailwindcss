import React from 'react'

const mostloved = [
  {
    id: 1,
    img: 'src/assets/images/Choclate_Matcha.png',
    name: 'Chocolate Matcha',
    price: '$6.50'
  },
  {
    id: 2,
    img: 'src/assets/images/Matcha_Latte.png',
    name: 'Matcha Latte',
    price: '$5.00'
  },
  {
    id: 3,
    img: 'src/assets/images/Orange_Matcha.png',
    name: 'Orange Matcha',
    price: '$5.75'
  },
  {
    id: 4,
    img: 'src/assets/images/Cup.png',
    name: 'Cupcake',
    price: '$4.25'
  },
  {
    id: 5,
    img: 'src/assets/images/Birthday_Cakes.png',
    name: 'Birthday Cake',
    price: '$35.00'
  }
];
const MostLovedGrid = () => {
  return (
    <div className='grid grid-cols-5 mt-10 gap-4 px-4'>
      {mostloved.map((item) => (
        <div className='flex flex-col items-center' key={item.id}>
          <div>
            <img src={item.img} className='h-50 w-50 drop-shadow-lg rounded-lg object-cover' />
          </div>
          <div className='flex flex-col mt-4 bg-[#dfc198] px-3 w-fit shadow-lg'
            style={{ clipPath: "polygon(4% -6%, 29% -8%, 56% 0%, 28% 21%, 56% -2%, 73% 8%, 85% 0%, 95% 9%, 100% 25%, 89% 54%, 100% 85%, 90% 89%, 80% 80%, 65% 95%, 55% 90%, 40% 100%, 25% 90%, 10% 95%, 2% 107%, 3% 46%, -1% -2%, 5% 0%)" }}>
            <p className='font-space-regular text-lg'>{item.name}</p>
            <p className='font-space-semi-bold text-lg'>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default MostLovedGrid