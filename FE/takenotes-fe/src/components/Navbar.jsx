import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-indigo-300 w-full py-3 px-30 flex items-center justify-between'>
            <div>
                <Link href={'/'} className='text-xl font-bold text-indigo-700 cursor-pointer'>Keep Notes</Link>
            </div>
            <div>
                <ul className='flex gap-8 font-bold text-sm text-indigo-600'>
                    <li className='cursor-pointer hover:text-indigo-800 transition ease-in'>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li className='cursor-pointer hover:text-indigo-800 transition ease-in'>
                        <Link href={'/'}>
                            Notes
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-indigo-800 transition ease-in'>
                        <Link href={'/'}>
                            Account
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-indigo-800 transition ease-in'>
                        <Link href={'/login'}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar