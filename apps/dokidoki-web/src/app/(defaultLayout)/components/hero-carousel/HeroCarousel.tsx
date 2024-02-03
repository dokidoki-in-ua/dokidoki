import slide1 from '@/_dev/imgs/kimetsu.webp'
import slide2 from '@/_dev/imgs/solo-leveling.webp'
import slide3 from '@/_dev/imgs/shangri-la.webp'
import slide4 from '@/_dev/imgs/crunch.jpg'

import logo1 from '@/_dev/imgs/slol-logo.webp'
import logo2 from '@/_dev/imgs/metalic-logo.webp'

import Image from 'next/image'
import CarouselSlide from './components/CarouselSlide'
import CarouselLogic from './components/CarouselLogic'
import { Slide } from '@/types/carousel.types'

// prettier-ignore
const slides: Slide[] = [
    { id: 1, src: slide1, title: 'Kimetsu no yaiba', synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi dolore quidem commodi ut maxime aperiam aspernatur! Iure, saepe sint soluta ducimus quia reprehenderit ad laudantium nesciunt quam eaque, ipsa temporibus eveniet facilis id laboriosam cumque. Veritatis, obcaecati? Enim, expedita consequuntur facilis, sunt voluptas ipsam laboriosam a doloremque amet eos harum tempora porro odio labore autem voluptatibus? Provident atque veniam nisi aperiam nihil possimus officia quas eum minima, molestiae fugiat soluta, velit harum quaerat? Enim dolorem sunt veritatis voluptatum laborum. Dolorem recusandae tempore itaque rem, et praesentium alias harum neque doloribus labore illo temporibus dolore similique sint corporis, illum enim!', logo: logo1 },
    { id: 2, src: slide2, title: 'Solo leveling', synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi dolore quidem commodi ut maxime aperiam aspernatur! Iure, saepe sint soluta ducimus quia reprehenderit ad laudantium nesciunt quam eaque, ipsa temporibus eveniet facilis id laboriosam cumque. Veritatis, obcaecati? Enim, expedita consequuntur facilis, sunt voluptas ipsam laboriosam a doloremque amet eos harum tempora porro odio labore autem voluptatibus? Provident atque veniam nisi aperiam nihil possimus officia quas eum minima, molestiae fugiat soluta, velit harum quaerat? Enim dolorem sunt veritatis voluptatum laborum. Dolorem recusandae tempore itaque rem, et praesentium alias harum neque doloribus labore illo temporibus dolore similique sint corporis, illum enim!', logo: logo2 },
    { id: 3, src: slide3, title: 'Shangri-la Frontier', synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi dolore quidem commodi ut maxime aperiam aspernatur! Iure, saepe sint soluta ducimus quia reprehenderit ad laudantium nesciunt quam eaque, ipsa temporibus eveniet facilis id laboriosam cumque. Veritatis, obcaecati? Enim, expedita consequuntur facilis, sunt voluptas ipsam laboriosam a doloremque amet eos harum tempora porro odio labore autem voluptatibus? Provident atque veniam nisi aperiam nihil possimus officia quas eum minima, molestiae fugiat soluta, velit harum quaerat? Enim dolorem sunt veritatis voluptatum laborum. Dolorem recusandae tempore itaque rem, et praesentium alias harum neque doloribus labore illo temporibus dolore similique sint corporis, illum enim!', logo: logo1 },
    { id: 4, src: slide4, title: 'Madara', synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi dolore quidem commodi ut maxime aperiam aspernatur! Iure, saepe sint soluta ducimus quia reprehenderit ad laudantium nesciunt quam eaque, ipsa temporibus eveniet facilis id laboriosam cumque. Veritatis, obcaecati? Enim, expedita consequuntur facilis, sunt voluptas ipsam laboriosam a doloremque amet eos harum tempora porro odio labore autem voluptatibus? Provident atque veniam nisi aperiam nihil possimus officia quas eum minima, molestiae fugiat soluta, velit harum quaerat? Enim dolorem sunt veritatis voluptatum laborum. Dolorem recusandae tempore itaque rem, et praesentium alias harum neque doloribus labore illo temporibus dolore similique sint corporis, illum enim!', logo: logo2 },
]

const HeroCarousel = () => {
    return <CarouselLogic slides={slides} />
}
export default HeroCarousel
