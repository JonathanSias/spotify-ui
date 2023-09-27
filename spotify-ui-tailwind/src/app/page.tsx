import { Home, Search, Library, Plus, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
// import { HomeIcon as Home, MagnifyingGlassIcon as Search  } from '@radix-ui/react-icons'

export default function Index() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="">
          <nav className='rounded m-2 w-auto bg-zinc-800 p-4 space-y-6'>
            <a href="" className='flex items-center gap-5 text-sm font-semibold text-zinc-200'>
              <Home></Home>
              Home
            </a>
            <a href="" className='flex items-center gap-5 text-sm font-semibold text-zinc-200'>
              <Search></Search>
              Search
            </a>
          </nav>
          
          <nav className='rounded m-2 w-auto bg-zinc-800 p-4 space-y-4'>
            <div className='flex'>
              <span className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                <Library></Library>
                Your Library
              </span>
              <div className='flex space-x-5 text-sm font-semibold text-zinc-200'>
                <Plus className='w-5'></Plus>
                <LayoutGrid className='w-5'></LayoutGrid>
              </div>
            </div>

            <div className='flex flex-col space-y-3'>
              <div className='flex flex-row items-center space-x-2'>
                <Image className='rounded' src="/on-repeat.jpg" width={50} height={50} alt="Capa Playlist On Repeat"></Image>
                <div className='flex flex-col text-xs space-y-1'>
                  <span className=''>On Repeat</span>
                  <span className='text-xs text-zinc-400'>Playlist - Jonathan Sias</span>
                </div>
              </div>

              <div className='flex flex-row items-center space-x-2'>
                <Image className='rounded' src="/mtv-cbj.jpg" width={50} height={50} alt="Capa Charlie Brown Jr Acustico MTV"></Image>
                <div className='flex flex-col text-xs space-y-1'>
                  <span className=''>Acústico (Ao vivo)</span>
                  <span className='text-xs text-zinc-400'>Album - Charlie Brown Jr</span>
                </div>
              </div>

              <div className='flex flex-row items-center space-x-2'>
                <Image className='rounded' src="/lume.jpeg" width={50} height={50} alt="Capa LUME de Filipe Ret"></Image>
                <div className='flex flex-col text-xs space-y-1'>
                  <span className=''>LUME</span>
                  <span className='text-xs text-zinc-400'>Album - Filipe Ret</span>
                </div>
              </div>

              <div className='flex flex-row items-center space-x-2'>
                <Image className='rounded' src="/weeknd.jpg" width={50} height={50} alt="Capa Charlie Brown Jr Acustico MTV"></Image>
                <div className='flex flex-col text-xs space-y-1'>
                  <span className=''>This is The Weeknd</span>
                  <span className='text-xs text-zinc-400'>Playlist - Spotify</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>
        <main className="rounded m-2 flex-1 bg-zinc-800 p-6">
          main
        </main>
      </div>
      <footer className="bg-zinc-950 m-4">
        player
      </footer>
    </div>
  )
}