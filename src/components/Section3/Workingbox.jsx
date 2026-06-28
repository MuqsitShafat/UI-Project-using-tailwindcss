import React from 'react'

const Workingbox = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-between mt-30 h-50 bg-amber-200'>
                <div className='flex flex-col items-start gap-5 ml-10 p-4 mt-5'>
                    <h1 className='text-6xl font-anton'>
                        Working Days
                    </h1>
                    <p className='font-space-reg leading-7'>Our working days are from Monday to Friday with holiday on Saturday & Sunday <br />The Working Hours are from 12:00 AM to 12:00 PM </p>
                </div>
                <div className='mr-5 h-80 w-[50%] relative -top-20'>
                    <img src='src/assets/images/WorkingHours.png' className='h-full w-full object-cover rounded-2xl' />
                </div>

            </div>

        </div>
    )
}

export default Workingbox