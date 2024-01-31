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
        <div>
            <div className='grid grid-cols-1 grid-rows-1 [grid-template-areas:"viewbox"]'>
                {children}
            </div>
            <div className='flex gap-6'>
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
