import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

const Arrows = () => {
    return (
        <div className='hidden md:block'>
            <div className='absolute left-0 top-0 z-[1] flex h-full items-center'>
                <button className='h-full bg-gradient-to-l from-transparent via-[#00000096] via-75% to-[#000000b3] fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200  hover:fill-font-hover'>
                    <MdArrowBackIosNew size={24} />
                </button>
            </div>
            <div className='absolute right-0 top-0 z-[1] flex h-full items-center'>
                <button className='h-full fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200 hover:fill-font-hover'>
                    {/* <span className='absolute inset-0 -z-[0] bg-gradient-to-r from-transparent via-[#000000b9] via-34%  to-[#000000e1] opacity-100'></span> */}
                    <MdArrowForwardIos size={24} />
                </button>
            </div>
        </div>
    )
}
export default Arrows
