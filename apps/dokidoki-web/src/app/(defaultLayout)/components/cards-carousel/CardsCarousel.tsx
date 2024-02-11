import Card from './components/Card'
import Track from './components/Track'

const CardsCarousel = () => {
    return (
        <div className='__cards_carousel relative z-10'>
            <div className='overflow-hidden'>
                <div className='content-padding mb-4 text-xl font-bold md:text-2xl '>
                    <h1>Найкращі аніме</h1>
                </div>
                <div className='grid w-full [grid-template-areas:"viewbox"]'>
                    <Track>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Track>
                </div>
            </div>
        </div>
    )
}

export default CardsCarousel
