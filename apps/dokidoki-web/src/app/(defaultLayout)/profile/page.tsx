import { ReadonlyURLSearchParams } from 'next/navigation'
import Navigation from './components/navigation/Navigation'
import Overview from './components/overview/Overview'

interface PageProps {
    searchParams: ReadonlyURLSearchParams
}

const page: React.FC<PageProps> = ({ searchParams }) => {
    return (
        <div className='content-padding'>
            <div className='grid gap-8 max-w-[calc(var(--content-inline-padding)*2+65rem)] mx-auto'>
                <div className='__navigation'>
                    <Navigation searchParams={searchParams} />
                </div>
                <div className='__overview md:mt-4'>
                    <Overview />
                </div>
            </div>
        </div>
    )
}
export default page
