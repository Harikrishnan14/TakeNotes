import BreadCrumb from '@/components/BreadCrumb'
import { useRouter } from 'next/router'
import React from 'react'

const Signup = () => {

    const router = useRouter()

    return (
        <div className='py-4 px-30 flex flex-col h-[calc(100vh - 52px)]'>
            <BreadCrumb title={"Signup Page"} />
            <div className='flex items-center justify-center min-h-100' style={{ height: 'calc(100vh - 150px)' }}>
                <div className='border-2 border-amber-900 rounded-lg overflow-hidden w-100'>
                    <div className='flex items-center justify-between px-4 py-2 border-b border-amber-900 bg-yellow-500'>
                        <h5 className='text-amber-900 text-sm font-bold'>Signup</h5>
                        <div className='flex items-center justify-center gap-1'>
                            <div className='w-2 h-2 rounded-full bg-green-500'></div>
                            <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                            <div className='w-2 h-2 rounded-full bg-red-500'></div>
                        </div>
                    </div>
                    <div className='p-6'>
                        <h2 className='text-center text-xl mb-3 font-bold text-amber-900'>Sign up</h2>
                        <div className='flex flex-col items-start justify-center mb-2'>
                            <label htmlFor="username" className='font-bold text-amber-900 mb-1'>Username</label>
                            <input type="text" id='username' name='username' placeholder='' className='border-2 border-amber-900 p-2 bg-white w-full rounded-2xl text-sm' />
                        </div>
                        <div className='flex flex-col items-start justify-center mb-2'>
                            <label htmlFor="email" className='font-bold text-amber-900 mb-1'>Email</label>
                            <input type="email" id='email' name='email' placeholder='' className='border-2 border-amber-900 p-2 bg-white w-full rounded-2xl text-sm' />
                        </div>
                        <div className='flex flex-col items-start justify-center mb-2'>
                            <label htmlFor="password" className='font-bold text-amber-900 mb-1'>Password</label>
                            <input type="password" id='password' name='password' placeholder='' className='border-2 border-amber-900 p-2 bg-white w-full rounded-2xl text-sm' />
                        </div>
                        <div className='flex flex-col items-start justify-center mb-6'>
                            <label htmlFor="cpassword" className='font-bold text-amber-900 mb-1'>Confirm Password</label>
                            <input type="password" id='cpassword' name='cpassword' placeholder='' className='border-2 border-amber-900 p-2 bg-white w-full rounded-2xl text-sm' />
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <button className='p-2 bg-green-300 rounded-2xl w-[125px] text-amber-900 font-bold cursor-pointer hover:bg-green-400 transition ease-in'>Register</button>
                            <button className='p-2 bg-yellow-300 rounded-2xl w-[125px] text-amber-900 font-bold cursor-pointer hover:bg-yellow-400 transition ease-in' onClick={() => router.push('/login')}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup