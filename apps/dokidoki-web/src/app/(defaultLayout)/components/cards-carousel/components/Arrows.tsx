import { RefObject } from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

interface ArrowsProps {
    trackRef: RefObject<HTMLDivElement>
}

const Arrows: React.FC<ArrowsProps> = ({ trackRef }) => {
    const handleClick = (way: string) => {
        const track = trackRef.current
        if (!track) return

        const { clientWidth, scrollLeft, style } = track
        const { paddingLeft, paddingRight } = window.getComputedStyle(track)

        const leftPadding = parseFloat(paddingLeft)
        const rightPadding = parseFloat(paddingRight)

        const paddingTotal = leftPadding + rightPadding
        const contentWidth = clientWidth - paddingTotal

        const scrollIncrement = way === 'forward' ? contentWidth : -contentWidth

        const newScrollPosition = scrollLeft + scrollIncrement

        track.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
        })
    }

    return (
        <div className='hidden md:block'>
            <div className='absolute left-0 top-0 z-[1] flex h-full items-center'>
                <button
                    className='h-full fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200  hover:fill-font-hover'
                    onClick={() => handleClick('')}
                >
                    <span className='via-34% absolute inset-0 -z-[0] bg-gradient-to-l from-transparent via-[#0000006c] to-[#0000008f] opacity-0 duration-200 hover:opacity-100'></span>
                    <MdArrowBackIosNew size={24} />
                </button>
            </div>
            <div className='absolute right-0 top-0 z-[1] flex h-full items-center'>
                <button
                    className='h-full fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200 hover:fill-font-hover'
                    onClick={() => handleClick('forward')}
                >
                    <span className='via-34% absolute inset-0 -z-[0] bg-gradient-to-r from-transparent via-[#0000006c] to-[#0000008f] opacity-0 duration-200 hover:opacity-100'></span>
                    <MdArrowForwardIos size={24} />
                </button>
            </div>
        </div>
    )
}
export default Arrows
