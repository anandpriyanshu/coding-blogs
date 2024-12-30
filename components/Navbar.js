

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-btn'
function Navbar() {
    return (
        <>

            <nav className="flex justify-around items-center p-4 ">
                <Link href="/"><div className="text-2xl font-bold">ShanuLogo</div></Link>
                <div className="hidden md:flex-row md:items-center md:gap-4 md:block">
                    <Link href="/" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Home</Link>
                    <Link href="/about" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">About</Link>
                    <Link href="/blog" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Blog</Link>
                    <Link href="/contact" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Contact</Link>
                </div>
                <div className="md:hidden flex flex-col cursor-pointer" >
                    <span className="h-1 w-8 bg-white mb-1"></span>
                    <span className="h-1 w-8 bg-white mb-1"></span>
                    <span className="h-1 w-8 bg-white"></span>
                </div>
                <div className='flex items-center'>
                    <Button className="mx-2" variant="outline">Login</Button>
                    <Button className="mx-2" variant="outline">Sign up</Button>
                    <ModeToggle />
                </div>

            </nav>
        </>
    )
}

export default Navbar