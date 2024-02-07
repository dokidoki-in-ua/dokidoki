import Card from './components/Card'
import Track from './components/Track'

const CardsCarousel = () => {
    return (
        <div className='__cards_carousel relative z-10'>
            <div className='content-padding overflow-hidden'>
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
