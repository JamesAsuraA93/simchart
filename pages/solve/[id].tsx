import ContentRaw from '@/components/ContentRaw'
import MenuFilter from '@/components/MenuFilter'
import TagSearching from '@/components/TagSearching'
import JJGrid from '@/layouts/JJGrid'
import Scope from '@/layouts/Scope'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MetaFilter } from '../search/[tag]'
import SolveContent from '@/components/SolveContent'

type Props = {}

export default function SolveId({}: Props) {


    const router = useRouter()

    const  { id, uid } = router.query

    const [queryData, setQueryData] = useState({
        id: id || "",
        uid: uid || ""
    })

    useEffect(() => {
        
        setQueryData({
            id: id || "",
            uid: uid || ""
        })

    }, [ id, uid])


    const [metaChoose, setMetaChoose] = useState<MetaFilter>({
        filterPostData: "ALL",
        dateStart: new Date(),
        dateEnd: new Date(),
        chooseTopic: "RAW DATA"
    })


    useEffect(() => {
        console.log(metaChoose)
    },[metaChoose])
    

  return (
    <>
    <div className='w-full min-h-[100vh] bg-[#B185C6] p-4'>
        <JJGrid className='grid-cols-4 gap-4 w-full h-full'>
          {/* The first Menu */}
          <Scope className='bg-[#8D6A99] col-span-1 h-full p-2 rounded-md'>
            <TagSearching />
          </Scope>


          <Scope className='h-full col-span-3 bg-white rounded-md p-4'>
            {/* <MenuFilter setMetaChoose={setMetaChoose}  metaChoose={metaChoose} topicData={topicData} /> */}
            {/* <ContentRaw metaChoose={metaChoose} searchTagTopic={queryData.id ? `${queryData.id}` : ""} /> */}

            <SolveContent metaChoose={metaChoose} searchTagTopic={queryData.id ? `${queryData.id}` : ""} 
            uid={queryData.uid ? `${queryData.uid}` : ""}
            />

          </Scope>

        </JJGrid>
      </div>

    </>
  )
}