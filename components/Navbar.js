
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-btn'
import LoadingBar from "react-top-loading-bar";
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

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

            <nav className="flex justify-around items-center p-4 bg-background/50 sticky top-0 border-b backdrop-blur-0 ">
                <LoadingBar
                    color="#f11946"
                    progress={progress}
                    onLoaderFinished={() => setprogress(0)}
                />
                <Link href="/"><div className="text-2xl font-bold">ShanuLogo</div></Link>

                <div className='flex  justify-center items-center'>

                    <div className="hidden md:flex-row md:items-center md:gap-4 md:block">
                        <Link href="/" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Home</Link>
                        <Link href="/about" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">About</Link>
                        <Link href="/blog" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Blog</Link>
                        <Link href="/contact" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Contact</Link>
                    </div>
                    <div className="md:hidden flex flex-col cursor-pointer" >
                        <Sheet>
                            <SheetTrigger>
                                <button class="flex items-center justify-center w-8 h-8 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </SheetTrigger>

                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Welome to the Blogs</SheetTitle>
                                    <SheetDescription className="flex flex-col items-center">
                                        <Link href="/" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Home</Link>
                                        <Link href="/about" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">About</Link>
                                        <Link href="/blog" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Blog</Link>
                                        <Link href="/contact" className="py-2 px-4 hover:text-white hover:bg-gray-700 rounded">Contact</Link>
                                    </SheetDescription>
                                    <div>
                                        <Link href='/login'><Button className="mx-2" variant="outline">Login</Button></Link>
                                        <Button className="mx-2 " variant="outline">Sign up</Button>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>
                    <div className='hidden md:flex items-center'>
                        <Link href='/login'><Button className="mx-2" variant="outline">Login</Button></Link>
                        <Button className="mx-2 " variant="outline">Sign up</Button>
                        <ModeToggle />
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar