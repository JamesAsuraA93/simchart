import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Middle(Layout: Props) {
  return (
    <div className={` ${Layout.className} flex items-center justify-center`}>
        {Layout.children}
    </div>
  )
}