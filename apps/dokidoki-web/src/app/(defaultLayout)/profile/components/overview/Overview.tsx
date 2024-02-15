import avatar from '@/_dev/imgs/solo-leveling.webp'
import ThemeButton from '@/components/ui/main/ThemeButton'
import Image from 'next/image'
import { MdModeEditOutline } from 'react-icons/md'

interface OverviewProps {}

const Overview: React.FC<OverviewProps> = () => {
    return (
        <div className='flex gap-2'>
            <div className='aspect-square w-24 h-24 md:h-32 md:w-32 overflow-hidden rounded-[3px] bg-primary'>
                <Image src={avatar} alt='avatar' />
            </div>

            <div className='flex-1'>
                <div className='flex items-end justify-between'>
                    <div className='ml-1'>
                        <div className='__nickname flex gap-[3px]'>
                            <h1 className='text-2xl sm:text-3xl font-semibold'>Folsed</h1>
                            <div className='select-none text-xs text-shadow'>
                                <span>he/him</span>
                            </div>
                        </div>

                        <div className='flex gap-6 text-xs sm:text-sm uppercase lg:gap-12'>
                            <div className='__role text-secondary'>
                                <span>administrator</span>
                            </div>
                            <div className='__joined'>
                                <span>приєднався </span>
                                <span>16.09.2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className='mt-[.8rem] block h-[2px] w-full bg-gradient-to-r from-[#ffffff4d] to-black' />
            </div>
        </div>
    )
}
export default Overview
