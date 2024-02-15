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
        <div className='mt-4 hidden sm:flex lg:ml-32'>
            <div className='flex items-center text-sm uppercase text-span md:text-base'>
                <div className='avatar mr-1 h-6 w-6 overflow-hidden rounded-sm bg-primary'>
                    <Image src={avatar} alt='Avatar' />
                </div>
                <div className='flex'>
                    {tabs.map((item, index) => (
                        <div
                            className={`after:px-2 after:text-span after:content-["/"] last:after:px-0 last:after:content-[""] md:after:px-3 ${
                                currentTab ===
                                (item.link === '/profile'
                                    ? ''
                                    : item.link.slice(1))
                                    ? 'text-font-hover drop-shadow-[0_0_8px_rgba(255,255,255,1)]'
                                    : ''
                            }`}
                            key={index}
                        >
                            <Link
                                href={item.link}
                                className='[transition:color_.2s_ease] hover:text-font-hover '
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Navigation
