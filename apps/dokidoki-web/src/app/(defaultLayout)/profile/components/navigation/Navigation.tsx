import { ReadonlyURLSearchParams } from 'next/navigation'
import avatar from '@/_dev/imgs/solo-leveling.webp'
import Image from 'next/image'
import { tabs } from './_tabs'
import Link from 'next/link'

interface NavigationProps {
    searchParams: ReadonlyURLSearchParams
}

const Navigation: React.FC<NavigationProps> = ({ searchParams }) => {
    const currentTab = Object.keys(searchParams)[0] || ''

    return (
        <div className='mt-4 lg:ml-32 hidden sm:flex'>
            <div className='flex items-center text-sm uppercase text-span md:text-base'>
                <div className='avatar mr-1 h-6 w-6 overflow-hidden rounded-sm bg-primary'>
                    <Image src={avatar} alt='Avatar' />
                </div>
                <div className='flex'>
                    {tabs.map((item, index) => (
                        <div
                            className={`after:px-2 md:after:px-3 after:text-span after:content-["/"] last:after:px-0 last:after:content-[""] ${
                                currentTab ===
                                (item.link === '/profile'
                                    ? ''
                                    : item.link.slice(1))
                                    ? 'text-font-hover drop-shadow-[0_0_10px_rgba(255,255,255,1)]'
                                    : ''
                            }`}
                            key={index}
                        >
                            <Link href={item.link}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Navigation
