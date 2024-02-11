import preview from '@/_dev/imgs/solo-preview.webp'
import Image, { StaticImageData } from 'next/image'

const card: { image: StaticImageData; title: string } = {
    image: preview,
    title: 'Solo Leveling',
}

const Card = () => {
    return (
        <div className='p-[var(--hero-cards-col-gap)] w-full'>
            <div className=''>
                <Image src={card.image} alt={card.title} className='w-full h-full aspect-video' />
            </div>
        </div>
    )
}
export default Card
