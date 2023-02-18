import React from 'react'

type Props = {}

export default function MenuFilter({ }: Props) {
    return (
        <>
            <div className='w-full flex flex-col md:flex-row md:space-x-2 justify-between space-y-2 md:space-y-0'>
                <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0'>
                    <button className={`px-4 py-2 bg-[#62177C] text-white rounded-lg text-xl`}>
                        RAW DATA
                    </button>

                    <button className={`px-4 py-2 bg-[#8D6A99] text-white rounded-lg text-xl`}>
                        ANALYST DATA
                    </button>
                </div>

                <div className='py-2 flex md:px-4 flex-row space-x-2 bg-[#8D6A99] rounded-lg text-xl items-center justify-center'>
                    <div className='bg-white text-black px-4 py-1 rounded-md'>
                        {`DD/MM/YY`}
                    </div>

                    <p className='text-white'>
                        {`-`}
                    </p>

                    <div className='bg-white text-black px-4 py-1 rounded-md'>
                        {`DD/MM/YY`}
                    </div>
                </div>

            </div>


        </>
    )
}