import { Button } from '@/components/ui/shadcn/button'
import Header from './components/header/Header'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-full min-h-full flex-col'>
            <Header />
            <main className='page-content flex flex-col pt-[60px]'>
                {children}
            </main>
        </div>
    )
}
export default DefaultLayout
