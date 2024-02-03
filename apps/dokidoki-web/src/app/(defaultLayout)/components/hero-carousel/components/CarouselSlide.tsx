import { Slide } from '@/types/carousel.types'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselSlideProps {
    currentIndex: number
    index: number
    slide: Slide
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
    currentIndex,
    index,
    slide,
}) => {
    return (
        <div
            className={`[grid-area:viewbox] [transition:opacity_.7s_ease] ${index === currentIndex ? 'z-[1] opacity-100' : 'z-0 opacity-0'}`}
        >
            <div className='container'>
                <div className='grid aspect-[1/1.15] grid-cols-12 grid-rows-[1fr,_auto] content-end items-end gap-x-[0.625rem]'>
                    <div className='pointer-events-none absolute left-0 top-0 -z-10 aspect-[2/3] w-full min-w-full  sm:aspect-[16/9]'>
                        <picture>
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                priority
                                className='object-cover'
                            />
                        </picture>
                        <div className='absolute inset-0 block aspect-[inherit] bg-gradient-to-b from-transparent to-black sm:bg-hero-carousel'></div>
                    </div>
                    <div className='hero_logo col-[4/span_6] row-start-1 grid aspect-[15/8]'>
                        <Link href={'/'}>
                            <Image
                                src={slide.logo}
                                alt={slide.title}
                                className=''
                            />
                        </Link>
                    </div>
                    <div className='hero_synopsis hidden'>{slide.synopsis}</div>
                    <div className='hero_actions col-[1/span_12] row-start-2 grid'>
                        <button>Test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselSlide
