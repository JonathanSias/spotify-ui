import { PlaySquare, Mic2, ListMusic, MonitorSpeaker, Volume1, Maximize2, Shuffle, SkipBack, PlayCircle,SkipForward, Repeat } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between bg-zinc-950 my-2 mx-4">
            {/* music */}
            <div className='flex flex-row items-center space-x-3'>
                <Image className='rounded' src="/lume.jpeg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                <div className='flex flex-col text-xs space-y-1'>
                    <span className='text-sm'>Trem Bala</span>
                    <span className='text-xs text-zinc-400 cursor-pointer'>Filipe Ret</span>
                </div>
            </div>
            {/* controls */}
            <div className='flex flex-col items-center gap-2'>
                <div className='flex flex-row items-center space-x-4'>
                    <Shuffle size={20} className='text-green-400 cursor-pointer'></Shuffle>
                    <SkipBack size={20} className='text-zinc-400 cursor-pointer'></SkipBack>
                    <PlayCircle size={35} className='text-zinc-200 cursor-pointer'></PlayCircle>
                    <SkipForward size={20} className='text-zinc-400 cursor-pointer'></SkipForward>
                    <Repeat size={20} className='text-green-600 cursor-pointer'></Repeat>
                </div>
                <div className='flex flex-row items-center'>
                    <span className='text-xs text-zinc-600'>1:12</span>
                    <div className='rounded-full h-1 w-48 bg-zinc-200 ml-2'></div>
                    <div className='rounded-full h-1 w-96 bg-zinc-600 mr-2'></div>
                    <span className='text-xs text-zinc-600'>4:20</span>
                </div>
            </div>
            {/* other controls */}
            <div className='flex flex-row space-x-3'>
                <PlaySquare size={18} className='cursor-pointer'></PlaySquare>
                <Mic2 size={18} className='cursor-pointer'></Mic2>
                <ListMusic size={18} className='cursor-pointer'></ListMusic>
                <MonitorSpeaker size={18} className='cursor-pointer'></MonitorSpeaker>
                <Volume1 size={18} className='cursor-pointer'></Volume1>
                <Maximize2 size={18} className='cursor-pointer'></Maximize2>
            </div>
        </footer>
    )
}