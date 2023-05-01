import TagSearching from '@/components/TagSearching'
import JJGrid from '@/layouts/JJGrid'
import Middle from '@/layouts/Middle'
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


          <Scope className='h-full col-span-3 bg-white rounded-md'>
            {/* <MenuFilter />
            <ContentRaw /> */}

            <Middle className='h-screen w-full flex-col p-4'>
              <h1 className='text-3xl text-black font-semibold text-center leading-10 cursor-pointer'>
                กรุณา Search #hashTag ก่อนเพื่อทำการค้นหา <br /> และ Click Tag ที่ต้องการจะ Analyst Data
              </h1>
            </Middle>
            

          </Scope>

        </JJGrid>
      </div>
    </>
  )
}
