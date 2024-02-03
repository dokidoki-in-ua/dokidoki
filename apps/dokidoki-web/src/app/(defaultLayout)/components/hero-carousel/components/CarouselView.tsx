import React, { Children } from 'react'

interface CarouselViewProps {
    children: React.ReactNode
    currentIndex: number
    updateIndex: (newIndex: number) => void
}

const CarouselView: React.FC<CarouselViewProps> = ({
    children,
    currentIndex,
    updateIndex,
}) => {
    return (
        <div className='__hero_carousel'>
            <div className='relative grid [grid-template-areas:"viewbox"]'>
                {children}
            </div>
            <div className='absolute bottom-0 right-0 flex gap-6 z-40'>
                <button onClick={() => updateIndex(currentIndex - 1)}>
                    Backward
                </button>
                <button onClick={() => updateIndex(currentIndex + 1)}>
                    Forward
                </button>
            </div>
        </div>
    )
}
export default CarouselView
