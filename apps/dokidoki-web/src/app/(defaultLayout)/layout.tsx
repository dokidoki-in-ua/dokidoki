import { Button } from '@/components/ui/button'
import Header from './components/header/Header'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-full min-h-full flex-col'>
            <Header />
            <main className='page-content pt-[60px]'>{children}</main>
        </div>
    )
}
export default DefaultLayout
