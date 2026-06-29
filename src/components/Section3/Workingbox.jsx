import React from 'react'

const Workingbox = () => {
    return (
        <div className='bg-white '>
            <div className='flex justify-between items-start mt-15 h-100 gap-5 px-10'>

                {/* Background Box with Custom L-Cut */}
                <div className='flex flex-col w-[45%] drop-shadow-lg '>

                    {/* Top Step (Heading): Automatically grows/shrinks to fit the text exactly */}
                    <div className='w-fit '>
                        <div className='flex items-end'>
                            <h1 className='bg-amber-100 rounded-tl-[20px] rounded-tr-[20px] px-6 pt-5 pb-2 text-5xl md:text-6xl font-anton whitespace-nowrap text-black'>
                                Working Days
                            </h1>
                            <div className='flex bg-amber-200 mx-h-60 max-w-60 rounded-2xl items-center justify-center m-3'>
                                <img src='src/assets/images/Clock.png' className='h-full w-full object-cover drop-shadow-md' alt="Working Days" />

                            </div>
                        </div>
                    </div>

                    <div className='bg-amber-100 w-full p-6 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] -mt-px '>
                        <p className='font-space-reg leading-6 text-gray-800'>
                            Our working days are from Monday to Friday with holiday on Saturday & Sunday <br />
                            The Working Hours are from 12:00 AM to 12:00 PM
                        </p>
                    </div>
                </div>
                
                <div className='h-80 w-[50%] '>
                    <img
                        src='src/assets/images/WorkingHours.png'
                        className='h-full w-full object-cover rounded-2xl shadow-md'
                        alt="Working Hours"
                    />
                </div>

            </div>
        </div>
    )
}

export default Workingbox