import Link from 'next/link'

interface CarouselSlideProps {
    children: React.ReactNode
    currentIndex: number
    index: number
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
    children,
    currentIndex,
    index,
}) => {
    return (
        <div
            className={`h-[500px] snap-start [transition:opacity_.7s_ease] [grid-area:viewbox] ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            <div className='inline-flex h-full w-[1000px] items-center justify-center overflow-hidden'>
                <Link href={'/'}>
                    <div className='h-full w-full object-contain'>
                        {children}
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default CarouselSlide
