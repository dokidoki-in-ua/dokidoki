import slide1 from '@/_dev/imgs/kimetsu.webp'
import slide2 from '@/_dev/imgs/solo-leveling.webp'
import slide3 from '@/_dev/imgs/shangri-la.webp'
import Image from 'next/image'
import CarouselSlide from './components/CarouselSlide'
import CarouselLogic from './components/CarouselLogic'

const slides = [
    { id: 1, src: slide1, title: 'Kimetsu no yaiba' },
    { id: 2, src: slide2, title: 'Solo leveling' },
    { id: 3, src: slide3, title: 'Shangri-la Frontier' },
    { id: 4, src: slide1, title: 'Kimetsu no yaiba' },
    { id: 5, src: slide2, title: 'Solo leveling' },
    { id: 6, src: slide3, title: 'Shangri-la Frontier' }
]

const HeroCarousel = () => {
    return (
        <CarouselLogic>
            {slides.map((item, index) => (
                <CarouselSlide key={item.id}>
                    <Image
                        src={item.src}
                        alt={item.title}
                        title={item.title}
                        priority
                    />
                </CarouselSlide>
            ))}
        </CarouselLogic>
    )
}
export default HeroCarousel
