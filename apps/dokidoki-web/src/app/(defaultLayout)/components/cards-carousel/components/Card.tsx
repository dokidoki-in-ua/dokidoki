import preview from '@/_dev/imgs/solo-preview.webp'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { RefObject, useEffect, useRef, useState } from 'react'

const card: { image: StaticImageData; title: string } = {
    image: preview,
    title: 'Solo Leveling',
}

interface CardProps {
    trackRef: RefObject<HTMLDivElement>
}

const Card: React.FC<CardProps> = ({ trackRef }) => {
    const [hoverIsActive, setHoverIsActive] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cardRefCurrent = cardRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    cardRefCurrent?.removeAttribute('inert')
                } else {
                    cardRefCurrent?.setAttribute('inert', '')
                }
            },
            {
                root: trackRef.current,
                threshold: 0.5,
            }
        )

        if (cardRefCurrent) {
            observer.observe(cardRefCurrent)
        }

        return () => {
            if (cardRefCurrent) {
                observer.unobserve(cardRefCurrent)
            }
        }
    }, [trackRef])

    return (
        <div
            className='relative w-full snap-start p-[var(--hero-cards-col-gap)] duration-200 aria-hidden:pointer-events-none aria-hidden:opacity-50'
            ref={cardRef}
        >
            <div className=''>
                <Image
                    src={card.image}
                    alt={card.title}
                    className='aspect-video h-full w-full duration-200'
                />
            </div>
        </div>
    )
}
export default Card
