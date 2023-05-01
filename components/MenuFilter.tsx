import { MetaFilter, topicDataChoose } from '@/pages/search/[tag]'
import React, { useRef } from 'react'
import Selection from './Selection'

type Props = {
    setMetaChoose: React.Dispatch<React.SetStateAction<MetaFilter>>
    metaChoose: MetaFilter
    topicData: topicDataChoose[]
}

export default function MenuFilter(Menu: Props) {

    return (
        <>
            <div className='w-full flex flex-col md:flex-row md:space-x-2 justify-between space-y-2 md:space-y-0'>
                <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0'>
                    {
                        Menu.topicData.map((topic, index) => {
                            return (
                                <button onClick={()=>{
                                    Menu.setMetaChoose({
                                        ...Menu.metaChoose,
                                        chooseTopic: topic
                                    })
                                }} key={index} className={`${topic == Menu.metaChoose.chooseTopic ? `bg-[#62177C]` : `bg-[#8D6A99]`} px-4 py-2 text-white rounded-lg text-xl`}>
                                    {topic}
                                </button>
                            )
                        })
                    }
                </div>

                <div className='flex flex-row justify-center items-center space-x-4'>
                

                <div className='py-2 flex md:px-4 flex-row space-x-2 bg-[#8D6A99] rounded-lg text-xl items-center justify-center'>
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        </div>
                        <input
                        value={Menu.metaChoose.dateStart.toISOString().split('T')[0]}
                            onChange={(e) => {
                                Menu.setMetaChoose({
                                    ...Menu.metaChoose,
                                    dateStart: new Date(e.target.value)
                                })
                            }}

                            type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
                    </div>

                    <p className='text-white'>
                        {`-`}
                    </p>

                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        </div>
                        <input
                        min={Menu.metaChoose.dateStart.toISOString().split('T')[0]}
                        value={Menu.metaChoose.dateEnd.toISOString().split('T')[0]}
                            onChange={(e) => {
                                Menu.setMetaChoose({
                                    ...Menu.metaChoose,
                                    dateEnd: new Date(e.target.value)
                                })
                            }}

                            type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
                    </div>
                </div>

                <Selection 
                 setMetaChoose={Menu.setMetaChoose}
                 metaChoose={Menu.metaChoose}
                />

                </div>


            </div>


        </>
    )
}