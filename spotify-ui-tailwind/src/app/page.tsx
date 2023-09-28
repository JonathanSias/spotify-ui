import { Sidebar } from '@/components/Sidebar'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
// import { HomeIcon as Home, MagnifyingGlassIcon as Search  } from '@radix-ui/react-icons'

export default function Index() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <div className=''>
        <Footer></Footer>
      </div>
    </div>
  )
}