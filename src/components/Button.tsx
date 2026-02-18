import React from 'react'

export default function Button({ labal, icon, onClick }:
    { labal: string, icon?: React.ReactNode, onClick?: () => void }) {
    return (
        <button className='flex justify-center items-center gap-2
         rounded-2xl bg-secondary  hover:bg-primary 
         text-primary hover:text-secondary
         px-4 py-2 text-sm font-semibold '
            onClick={onClick}
        >
            {labal}
            {icon}
        </button>
    )
}