import * as React from 'react'
import Arrows from './Arrows'

interface TrackProps {
    children: React.ReactNode
}

const Track: React.FC<TrackProps> = ({ children }) => {
    return (
        <div className='content-padding relative [grid-area:viewbox] '>
            <div className='carousel-margin content-padding  grid snap-mandatory auto-cols-[calc(100%/var(--hero-cards-inline))] grid-flow-col grid-rows-1 overflow-auto'>
                {children}
            </div>
            <Arrows />
        </div>
    )
}

export default Track
