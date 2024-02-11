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
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cardRefCurrent = cardRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    cardRefCurrent?.setAttribute('aria-hidden', 'false')
                } else {
                    cardRefCurrent?.setAttribute('aria-hidden', 'true')
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
    console.log(cardRef)

    return (
        <div
            className='hover:my-2- hover:scale-110- inert:opacity-50 w-full p-[var(--hero-cards-col-gap)] duration-200 aria-hidden:pointer-events-none aria-hidden:opacity-50'
            ref={cardRef}
        >
            <Link href={'/profile'} className=''>
                <Image
                    src={card.image}
                    alt={card.title}
                    className='aspect-video h-full w-full'
                />
            </Link>
        </div>
    )
}
export default Card
