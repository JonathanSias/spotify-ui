import { Home, Search, Library, Plus, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Sidebar () {
    return (
        <aside className="w-96">
            <nav className='rounded m-2 w-auto bg-zinc-900 p-4 space-y-6'>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Home></Home>
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Search></Search>
                    Search
                </a>
            </nav>
            <nav className='rounded m-2 w-auto bg-zinc-900 p-4 space-y-6'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                        <Library></Library>
                        Your Library
                    </span>
                    <div className='flex items-center space-x-4 text-sm font-semibold text-zinc-200'>
                        <Plus size={18} className='cursor-pointer'></Plus>
                        <ArrowRight size={18} className='cursor-pointer'></ArrowRight>
                    </div>
                </div>
                <nav className='flex flex-col space-y-3'>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/on-repeat.jpg" width={50} height={50} alt="Capa Playlist On Repeat"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>On Repeat</span>
                            <span className='text-xs text-zinc-400'>Playlist - Jonathan Sias</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/mtv-cbj.jpg" width={50} height={50} alt="Capa Charlie Brown Jr Acustico MTV"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Acústico (Ao vivo)</span>
                            <span className='text-xs text-zinc-400'>Album - Charlie Brown Jr</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/lume.jpeg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>LUME</span>
                            <span className='text-xs text-zinc-400'>Album - Filipe Ret</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2022.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2022</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2021.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2021</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2020.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2020</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2019.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2019</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2018.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2018</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2017.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2017</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/top-2016.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Your Top Songs 2016</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                    <a href="" className='flex flex-row items-center space-x-3'>
                        <Image className='rounded' src="/rewind.jpg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                        <div className='flex flex-col text-xs space-y-1'>
                            <span className=''>Repeat Rewind</span>
                            <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                        </div>
                    </a>
                </nav>
            </nav>
        </aside>
    )
}