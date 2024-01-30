'use client'

import { Children, useCallback, useState } from 'react'

const CarouselLogic = ({ children }: { children: React.ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const updateIndex = useCallback(
        (newIndex: number) => {
            if (newIndex < 0) {
                newIndex = Children.count(children) - 1
            } else if (newIndex >= Children.count(children)) {
                newIndex = 0
            }

            setCurrentIndex(newIndex)
        },
        [children]
    )

    console.log(currentIndex)

    return (
        <div>
            <div className='flex gap-6'>
                <button onClick={() => updateIndex(currentIndex - 1)}>
                    Back
                </button>
                <button onClick={() => updateIndex(currentIndex + 1)}>
                    Forward
                </button>
            </div>
            {children}
        </div>
    )
}
export default CarouselLogic
