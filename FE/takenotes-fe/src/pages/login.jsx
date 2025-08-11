import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'

const Login = () => {
    return (
        <div className='py-4 px-30 flex flex-col h-[calc(100vh - 52px)]'>
            <BreadCrumb title={"Login Page"} />
            <div className='flex items-center justify-center min-h-100'>Login</div>
        </div>
    )
}

export default Login