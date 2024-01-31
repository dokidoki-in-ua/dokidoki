import slide1 from '@/_dev/imgs/kimetsu.webp'
import slide2 from '@/_dev/imgs/solo-leveling.webp'
import slide3 from '@/_dev/imgs/shangri-la.webp'
import slide4 from '@/_dev/imgs/madara.jpg'
import slide5 from '@/_dev/imgs/girl.jpg'
import slide6 from '@/_dev/imgs/samurai.jpg'

import Image from 'next/image'
import CarouselSlide from './components/CarouselSlide'
import CarouselLogic from './components/CarouselLogic'
import { Slide } from '@/types/carousel.types'

const slides: Slide[] = [
    { id: 1, src: slide1, title: 'Kimetsu no yaiba' },
    { id: 2, src: slide2, title: 'Solo leveling' },
    { id: 3, src: slide3, title: 'Shangri-la Frontier' },
    { id: 4, src: slide4, title: 'Madara' },
    { id: 5, src: slide5, title: 'Girl' },
    { id: 6, src: slide6, title: 'Samurai' },
]

const HeroCarousel = () => {
    return <CarouselLogic slides={slides} />
}
export default HeroCarousel
