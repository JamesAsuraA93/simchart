import { MetaFilter, filterPost, filterPostData } from '@/pages/search/[tag]'
import React from 'react'

type Props = {
    setMetaChoose: React.Dispatch<React.SetStateAction<MetaFilter>>
    metaChoose: MetaFilter
}

export default function Selection(Dropdown: Props) {

    const [openDropdown, setOpenDropdown] = React.useState<boolean>(false)
    return (
        <div className='relative space-y-2'>
            <button 
            onClick={()=>{
                setOpenDropdown(!openDropdown)
            }}
            className='inline-flex flex-shrink items-center border-2 border-[#706060] px-2 py-2 rounded-lg space-x-10'>
                <span className='text-[#706060] font-semibold'>
                    {Dropdown.metaChoose.filterPostData}
                </span>
                <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            {openDropdown && <div className='absolute z-20 border-2 border-[#706060] w-full rounded-lg bg-white space-y-1 py-1'>
                {
                    filterPostData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col space-y-1 px-2'>
                                {index != 0 && <hr />}
                                <button onClick={()=>{
                                    Dropdown.setMetaChoose({
                                        ...Dropdown.metaChoose,
                                        filterPostData: item
                                    })
                                    setOpenDropdown(false)
                                }} className='hover:bg-[#F3EFDA] rounded-md p-2 text-start'>
                                    {item}
                                </button>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}