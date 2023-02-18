import React from 'react'

type Props = {
    children: React.ReactNode
    className: string
}

export default function JJGrid({ children, className }: Props) {
    return (
        <div className={`grid ${className}`}>{children}</div>
    )
}