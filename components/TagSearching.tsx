import React, { useState } from 'react'

type Props = {}

export default function TagSearching({ }: Props) {
    const [valueSearch, setValueSearch] = useState({
        searching: ""
    })

    const [sub, setSub] = useState<string>("")

    return (
        <div className='w-full space-y-4 flex flex-col justify-center items-center '>

            <div className='flex w-full'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setSub(valueSearch.searching)
                }}
                    className="w-full"
                >
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">SEARCH</label>
                    <div className="relative">
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div> */}
                        <input
                            name="searching"
                            onChange={(e) => {
                                setValueSearch({
                                    ...valueSearch,
                                    [e.target.name]: e.target.value
                                })
                            }}
                            type="search" id="search" className="block w-full p-2.5 pl-2 text-md text-gray-900 border border-gray-300 rounded-lg "
                            placeholder="SEARCH" required />
                        <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 py-0.5 bg-white hidden md:flex"
                        >
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* {valueSearch.searching}

            {sub} */}

            <hr className='max-w-[90%] w-full' />

            {/* Keywords Tag */}
            <div className='w-full flex flex-col space-y-2'>
                {
                    [1, 2, 3].map((item, index) => {
                        return (
                            <button className='bg-white hover:bg-[#F3EFDA] rounded-md p-2 text-start'>
                                WORD{index}
                            </button>
                        )
                    })
                }
            </div>


        </div>
    )
}