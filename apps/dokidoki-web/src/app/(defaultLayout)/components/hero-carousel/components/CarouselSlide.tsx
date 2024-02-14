import ThemeButton from '@/components/ui/main/ThemeButton'
import { Slide } from '@/types/carousel.types'
import Image from 'next/image'
import Link from 'next/link'
import { FiPlay } from 'react-icons/fi'
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx'

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
            <div className='content-padding'>
                <div className='grid aspect-[1/1.15] w-full grid-cols-[repeat(12,_1fr)] grid-rows-[1fr,_auto] content-end items-end gap-x-[0.625rem] md:aspect-[20/7] md:gap-[1.25rem] lg:gap-[1.875rem] lg:pt-[1.25rem]'>
                    <div className='pointer-events-none absolute left-0 top-0 -z-10 aspect-[2/3] w-full min-w-full md:aspect-[16/9]'>
                        <picture>
                            <source
                                media='(max-width: 768px)'
                                srcSet={slide.mobile.src}
                            />
                            <Image src={slide.src} alt={slide.title} priority />
                        </picture>
                        <div className='absolute inset-0 block aspect-[inherit] bg-gradient-to-b from-transparent to-black md:bg-hero-carousel'></div>
                    </div>
                    <div className='hero_logo col-[4/span_6] row-start-1 grid md:col-[1/span_4] lg:col-[1/span_3]'>
                        <Link href={'/'}>
                            <picture>
                                <Image
                                    src={slide.logo}
                                    alt={slide.title}
                                    className='object-contain'
                                />
                            </picture>
                        </Link>
                    </div>
                    <div className='hero_meta col-[1/span_12] text-center md:col-[1/span_4] md:text-left'>
                        <span className='mt-2 inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-span'>
                            {slide.genres.map((item, index) => {
                                return (
                                    item +
                                    (index !== slide.genres.length - 1
                                        ? ', '
                                        : '')
                                )
                            })}
                        </span>
                        <p className='mt-1 hidden lg:line-clamp-4'>
                            {slide.synopsis}
                        </p>
                    </div>
                    <div className='hero_actions col-[1/span_12] row-start-3 flex  gap-3 sm:col-[3/span_8] md:col-[1/span_3] lg:col-[1/span_2]'>
                        <ThemeButton
                            className='h-10 w-fit flex-1 whitespace-nowrap bg-secondary fill-transparent stroke-black px-4 duration-200 hover:bg-secondary-hover active:bg-secondary-active lg:max-w-fit'
                            placeholder='Почати перегляд'
                            link={'/profile'}
                            icon={<FiPlay size={28} />}
                        />
                        <ThemeButton
                            className='border-2 border-secondary bg-[#00000035] px-1 text-secondary duration-200 hover:text-secondary-hover active:text-secondary-active'
                            icon={<RxBookmark size={28} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselSlide
