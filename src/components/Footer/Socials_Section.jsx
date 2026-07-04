import React from 'react'

const Socials_Section = () => {
    return (
        <div className='w-full border-b border-gray-600 flex justify-center'>
            <div className='flex justify-between items-start w-full max-w-300 px-6 py-10'>
                {/* description */}
                <div className='max-w-[320px]'>
                    <h1 className='font-space-bold text-base text-gray-200'>
                        Adan Bakers is a bakery that specializes in creating delicious and beautiful desserts.
                    </h1>
                </div>

                {/* Routings */}
                <div className='flex flex-col gap-2 shrink-0'>
                    <h1 className='font-space-bold'>Adan Bakers</h1>
                    <div className='text-gray-400 flex flex-col gap-1 px-1'>
                        <p className='cursor-pointer hover:underline'>Home</p>
                        <p className='cursor-pointer hover:underline'>Menu</p>
                        <p className='cursor-pointer hover:underline'>Contact</p>
                    </div>
                </div>

                {/* socials */}
                <div className='flex flex-col gap-2 shrink-0'>
                    <h1 className='font-space-bold'>Socials</h1>
                    <div className='text-gray-400 flex flex-col gap-1 px-1'>
                        <p className='cursor-pointer hover:underline'>About</p>
                        <p className='cursor-pointer hover:underline'>Twitter</p>
                        <p className='cursor-pointer hover:underline'>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials_Section