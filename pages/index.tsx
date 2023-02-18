import ContentRaw from '@/components/ContentRaw'
import MenuFilter from '@/components/MenuFilter'
import TagSearching from '@/components/TagSearching'
import JJGrid from '@/layouts/JJGrid'
import Scope from '@/layouts/Scope'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className='w-full min-h-[100vh] bg-[#B185C6] p-4'>
        <JJGrid className='grid-cols-4 gap-4 w-full h-full'>
          {/* The first Menu */}
          <Scope className='bg-[#8D6A99] col-span-1 h-full p-2 rounded-md'>
            <TagSearching />
          </Scope>


          <Scope className='h-full col-span-3 bg-white p-4 rounded-md space-y-3'>
            <MenuFilter />
            <ContentRaw />
          </Scope>

        </JJGrid>
      </div>
    </>
  )
}
