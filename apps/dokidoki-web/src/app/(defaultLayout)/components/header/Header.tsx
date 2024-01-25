import { Logo } from '@/components/svg/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { GrSearch } from 'react-icons/gr'
import { LuUser2 } from 'react-icons/lu'
import { SlMenu } from 'react-icons/sl'

const Header = () => {
    return (
        <div className='fixed z-10 flex h-[60px] w-full justify-center bg-primary '>
            <div className='flex w-full justify-between sm:w-10/12 sm:px-[20px]'>
                <div className='flex h-full'>
                    <Button className='flex h-full cursor-pointer items-center rounded-none fill-font px-2 text-[16px] font-normal duration-200 hover:bg-primary-active hover:fill-font-hover hover:text-font-hover sm:hidden'>
                        <SlMenu size={22} />
                    </Button>
                    <Link
                        href={'/'}
                        className='flex items-center fill-secondary px-[10px] duration-200 hover:fill-white'
                    >
                        <Logo className='w-[150px]' />
                    </Link>

                    <div className='hidden sm:flex'>
                        <Button className='flex h-full cursor-pointer items-center rounded-none fill-font px-2 text-[16px] font-normal duration-200 hover:bg-primary-active hover:fill-font-hover hover:text-font-hover'>
                            <span>Аніме</span>
                            <RiArrowDropDownFill size={22} />
                        </Button>

                        <Link
                            href={''}
                            className='flex items-center px-2 duration-200 hover:bg-primary-active hover:text-font-hover'
                        >
                            Новини
                        </Link>

                        <Link
                            href={''}
                            className='flex items-center px-2 duration-200 hover:bg-primary-active hover:text-font-hover'
                        >
                            Манга
                        </Link>
                    </div>
                </div>
                <div className='flex h-full'>
                    {/* there will be a separate Search component */}
                    <button className='flex items-center stroke-font px-4 duration-200  hover:bg-primary-active hover:fill-white hover:stroke-font-hover'>
                        <GrSearch size={22} />
                    </button>
                    {/* ===== */}
                    {/* there will be a separate User Menu component */}
                    <button className='hover:stroke-red flex items-center fill-transparent stroke-font px-4 duration-200 hover:bg-primary-active hover:stroke-font-hover'>
                        <LuUser2 size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header
