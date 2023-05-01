import ContentRaw from '@/components/ContentRaw'
import MenuFilter from '@/components/MenuFilter'
import TagSearching from '@/components/TagSearching'
import JJGrid from '@/layouts/JJGrid'
import Scope from '@/layouts/Scope'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export type filterPost = "ALL" | "POSITIVE" | "NEGATIVE" | "NEUTRAL"

export const filterPostData: filterPost[] = [
    "ALL",
    "POSITIVE",
    "NEGATIVE",
    "NEUTRAL"
]

export type topicDataChoose = "RAW DATA" | "ANALYST DATA"

const topicData: topicDataChoose[] = [
    "RAW DATA",
    "ANALYST DATA"
]

export type MetaFilter = {
  filterPostData: filterPost,
  dateStart: Date,
  dateEnd: Date,
  chooseTopic: topicDataChoose
}

export default function Tag({}: Props) {

    const router = useRouter()

    const { tag } = router.query

    const [topicTag, setTopicTag] = React.useState<string>("")

    React.useEffect(() => {
        if (tag) {
            setTopicTag(tag as string)
        }
    }, [router.query])


    const [metaChoose, setMetaChoose] = React.useState<MetaFilter>({
        filterPostData: "ALL",
        dateStart: new Date(),
        dateEnd: new Date(),
        chooseTopic: "RAW DATA"
    })


    React.useEffect(() => {
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
            <MenuFilter setMetaChoose={setMetaChoose}  metaChoose={metaChoose} topicData={topicData} />
            <ContentRaw metaChoose={metaChoose} searchTagTopic={topicTag} />

          </Scope>

        </JJGrid>
      </div>
    </>
  )
}