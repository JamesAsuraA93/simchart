import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function MainSite({ children }: Props) {
  return (
    <div className='h-[100vh] min-w-[1440px]'>{children}</div>
  )
}