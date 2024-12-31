
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-btn'
import LoadingBar from "react-top-loading-bar";
import { usePathname } from 'next/navigation'
function Navbar() {

    const pathname = usePathname()
    const [progress, setprogress] = useState(0)


    useEffect(() => {

        setprogress(30)
        setTimeout(() => {
            setprogress(70)
        }, 100)

        setTimeout(() => {
            setprogress(100)
        }, 800)
    }, [pathname])



    useEffect(() => {
        setTimeout(() => {
            setprogress(0)
        }, 900)
    }, [])
    return (
        <>

            <nav className="flex justify-around items-center p-4 bg-background/50 sticky top-0 border-b backdrop-blur ">
                <LoadingBar
                    color="#f11946"
                    progress={progress}
                    onLoaderFinished={() => setprogress(0)}
                />
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
                    <Link href="/about"> <Button className="mx-2" variant="outline">Login</Button></Link>
                    <Button className="mx-2" variant="outline">Sign up</Button>
                    <ModeToggle />
                </div>

            </nav>
        </>
    )
}

export default Navbar