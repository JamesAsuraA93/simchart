import React from 'react'
import Selection from './Selection'

type Props = {}

export default function ContentRaw({ }: Props) {
    return (
        <div className='space-y-3'>
            <div className='flex justify-between items-end'>
                <h1 className='text-[32px] text-black'>
                    {`WORD1`}
                </h1>
                <Selection />
            </div>

            <hr className='border-[1.5px] rounded-full border-[#ABABAB]' />
            <div className='p-10 space-y-4'>
                {[1, 2, 3].map((item, index) => {
                    return (
                        <div className='flex flex-col space-y-2'>
                            <div className='flex flex-col md:flex-row md:space-x-2 items-start'>
                                <h1 className='text-xl'>
                                    NAME : DD/MM/YY
                                </h1>

                                <button>
                                    solve this!
                                </button>
                            </div>

                            <p className={`boredr-[1px] border-[#EDEDED] ${index == 0 ? `bg-[#C4E4AB]` : `bg-[#FFC1C1]`} p-2 rounded-lg`}>
                                Detail Post Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum esse explicabo laudantium adipisci sequi quod architecto reiciendis, ad corrupti quas eaque tenetur praesentium, sed maiores rem dolorem! Pariatur, nam eveniet doloribus eum officiis nobis odio quas sapiente eos iusto totam distinctio voluptatem explicabo dolor autem quasi beatae blanditiis tempore.
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}