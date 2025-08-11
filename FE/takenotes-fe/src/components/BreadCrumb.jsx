import React from 'react'

const BreadCrumb = ({ title }) => {
    return (
        <div className='flex items-start justify-start gap-1 text-sm text-amber-950 mb-4'>
            <span>Homepage</span>
            <span>/</span>
            <span className='font-bold text-amber-950'>{title}</span>
        </div>
    )
}

export default BreadCrumb