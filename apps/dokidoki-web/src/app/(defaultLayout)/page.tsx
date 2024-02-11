import CardsCarousel from './components/cards-carousel/CardsCarousel'
import HeroCarousel from './components/hero-carousel/HeroCarousel'

export default function Home() {
    return (
        <section className='content grid grid-flow-row gap-y-24'>
            <HeroCarousel />
            <CardsCarousel />
            <CardsCarousel />
            <CardsCarousel />
            <CardsCarousel />
        </section>
    )
}
