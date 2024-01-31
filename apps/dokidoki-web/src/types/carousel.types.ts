import { StaticImageData } from 'next/image'

export interface Slide {
    id: number
    src: string | StaticImageData
    title: string
}
