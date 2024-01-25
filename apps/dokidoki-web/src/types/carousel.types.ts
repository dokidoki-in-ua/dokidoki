import { StaticImageData } from 'next/image'

export interface Slide {
    id: number
    anime_id: number
    content_path: string | StaticImageData
    alias: string
    title: string
}
