import React, { useEffect, useState } from 'react'
import Selection from './Selection'
import { mockData } from '@/system/mocks/hashTagData'
import { MetaFilter } from '@/pages/search/[tag]'
import { DataAPI } from '@/system/types/mocksType/@type'


import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

type Props = {
    searchTagTopic: string
    metaChoose: MetaFilter
}

Chart.register();
export default function ContentRaw(Content: Props) {

    // use Content.searchTagTopic as tag then Query to API or mockUp in configs


    // handle filterPostData
    
    const onHandleFilterChange = (Data:DataAPI[],Filter:MetaFilter) => {
        let CleanData = Data.filter(item => {
            if (item.id == Content.searchTagTopic) {
                return item.postLst
            }
        })



       


        // if(Filter.filterPostData == "ALL"){
        //     return Data.filter(item => item.id == Content.searchTagTopic)
        // }
        // if(Filter.filterPostData == "POSITIVE"){
        //     return Data.filter(item => item.id == Content.searchTagTopic).filter(item= >item )
        // }
        // if(Filter.filterPostData == "NEGATIVE"){
        //     return Data.filter(item => item.id == Content.searchTagTopic).filter(item=>item.score < 0)
        // }
        // if(Filter.filterPostData == "NEUTRAL"){
        //     return Data.filter(item => item.id == Content.searchTagTopic).filter(item=>item.score == 0)
        // }

    }


    const [numberEmotion, setNumberEmotion] = useState({
        positive: 0,
        negative: 0,
    })

    const [data, setData] = useState({
        labels: ["NEGATIVE", "POSITIVE"],
        datasets: [{
            label: 'Emotional',
            data: [
                numberEmotion.negative,
                numberEmotion.positive,
              
                // .flat()
                // .map((item, index) => {
                //     return item.
                // })
            ], // number []
            backgroundColor: [
                '#CC6363', // red
                '#3CC2C2', // good
            ],
            hoverOffset: 4
        }]
    })


    useEffect(() => {

        setNumberEmotion({
            negative:  mockData
            .filter(item => item.id == Content.searchTagTopic)
            .map(item => { return item.summaryAnalyticData })
            .map(item => { return item.negative })[0],
            positive:mockData
            .filter(item => item.id == Content.searchTagTopic)
            .map(item => { return item.summaryAnalyticData })
            .map(item => { return item.positive })[0]
        })
    },[Content,mockData])


    useEffect(() => {
        setData({
            labels: ["NEGATIVE", "POSITIVE"],
            datasets: [{
                label: 'Emotional',
                data: [
                    numberEmotion.negative,
                    numberEmotion.positive,
                  
                    // .flat()
                    // .map((item, index) => {
                    //     return item.
                    // })
                ], // number []
                backgroundColor: [
                    '#CC6363', // red
                    '#3CC2C2', // good
                ],
                hoverOffset: 4
            }]
            
        })
    }
    ,[numberEmotion])


    return (
        <div className='space-y-3 min-h-[100vh]'>
            <div className='flex justify-between items-end'>
                <h1 className='text-[32px] text-black'>
                    #{Content.searchTagTopic}
                </h1>
            </div>

            <hr className='border-[1.5px] rounded-full border-[#ABABAB]' />
            {Content.metaChoose.chooseTopic == "RAW DATA" && <div className='p-10 space-y-4'>
                {
                    mockData
                        .filter(item => item.id == Content.searchTagTopic)
                        .map(item => { return item.postLst })
                        .flat()
                        .map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col space-y-2'>
                                    <div className='flex flex-col md:flex-row md:space-x-2 items-start'>
                                        <h1 className='text-xl'>
                                            {item.twiiterName} : {item.date.split('T')[0]}
                                        </h1>

                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Solve this
                                            </span>
                                        </button>

                                    </div>

                                    <p className={`boredr-[1px] border-[#EDEDED] ${item.emotion == "POSITIVE" ? `bg-[#C4E4AB]` : `bg-[#FFC1C1]`} p-2 rounded-lg`}>
                                        {item.content}
                                    </p>
                                </div>
                            )
                        })



                }
                {/* {[1, 2, 3].map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col space-y-2'>
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
                })} */}
            </div>}

            {
                Content.metaChoose.chooseTopic == "ANALYST DATA" && <div className='p-10 space-y-4'>


                    <div className='flex flex-col'>

                        <div className='flex flex-col space-y-2'>
                            {
                                data.labels.map((item, index) => {
                                    return(
                                <div key={index} className='flex flex-row space-x-2 items-center'>
                                {/* Circle */}
                                
                                    <div className={`w-10 h-10 rounded-full ${index == 0 ? `bg-[#CC6363]` : `bg-[#3CC2C2]`}`}></div>
                                    {/* Text */}
                                    <h2 className='text-lg'>
                                        {item}
                                    </h2>

                                
                            </div>
                                    )
                                })
                            }
                            
                        </div>

                    <div className='h-[400px] flex w-full justify-center '>
                     <Pie data={data} width={400} height={200} options={{
                         plugins: {
                             legend: {
                                 display: false
                                },
                            },
                            animation: { animateScale: true }
                        }} />
                        </div>
                        </div>

                        <h1 className='text-2xl font-light text-center'>
                            {
                                numberEmotion.negative == numberEmotion.positive ? `All this hashtag has negative equal to positive` : numberEmotion.negative > numberEmotion.positive ? `All this hashtag has negative more than positive` : `All this hashtag has positive more than negative`
                            }
                        </h1>
                </div>

            }
        </div>
    )
}