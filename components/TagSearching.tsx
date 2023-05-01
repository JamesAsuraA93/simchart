import { useStoreData } from '@/system/data/searchData'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

export default function TagSearching({ }: Props) {

    const { searchList, setSearchList } = useStoreData()

    const [valueSearch, setValueSearch] = useState({
        searching: ""
    })

    // const [hashTag, setSearchList] = useState<string[]>([])

    const router = useRouter()


    return (
        <div className='w-full space-y-4 flex flex-col justify-center items-center '>

            <div className='flex w-full'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    // setSub(valueSearch.searching)
                    
                    setSearchList([...searchList, valueSearch.searching])
                    setValueSearch({
                        searching: ""
                    })
                    
                }}
                    className="w-full"
                >
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">SEARCH</label>
                    <div className="relative">
                        <h1 className='absolute left-2.5 bottom-2 text-xl text-gray-900'>
                            #
                        </h1>
                        <input
                            name="searching"
                            value={valueSearch.searching}
                            onChange={(e) => {
                                setValueSearch({
                                    ...valueSearch,
                                    [e.target.name]: e.target.value
                                })
                            }}
                            type="search" id="search" className=" block w-full p-2.5 pl-6 text-md text-gray-900 border border-gray-300 rounded-lg "
                            placeholder="SEARCH" required />
                        <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 py-0.5 bg-white hidden md:flex"
                        >
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
            <hr className='max-w-[90%] w-full' />

            {/* Keywords Tag */}
            <div className='w-full flex flex-col space-y-2'>
                {
                    searchList.map((item, index) => {
                        return (
                            <div key={item} className='w-full flex flex-row'>

                            <button onClick={()=>{
                                router.push(`/search/${item}`)
                            }} key={index} className='bg-white hover:bg-[#F3EFDA] rounded-md p-2 text-start w-full'>
                                #{item}
                            </button>

                            {/* Delete */}
                            {/* <button className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-right" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                    <path fillRule="evenodd" d="M13 10a1 1 0 01-2 0V9a1 1 0 012 0v1z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M7 9a1 1 0 011 1v1a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button> */}
                                </div>
                        )
                    })
                }
            </div>


        </div>
    )
}