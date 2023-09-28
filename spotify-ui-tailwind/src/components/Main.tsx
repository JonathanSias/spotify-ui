import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function Main() {
    return(
        <main className="rounded m-2 ml-0 flex-1 bg-zinc-900 p-6">
            <div>
                <div className='flex flex-row gap-2'>
                    <ChevronLeft size={30} className='bg-zinc-700 rounded-full opacity-75 cursor-pointer'></ChevronLeft>
                    <ChevronRight size={30} className='bg-zinc-700 rounded-full opacity-75 cursor-pointer'></ChevronRight>
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </main>
    )
}