import * as React from 'react'

interface TrackProps {
    children: React.ReactNode
}

const Track: React.FC<TrackProps> = ({ children }) => {
    return (
        <div className='[grid-area:viewbox]'>
            <div className='grid grid-flow-col auto-cols-[calc(100%/var(--hero-cards-inline))] grid-rows-1 snap-mandatory overflow-auto mx-[-80px] content-padding'>{children}</div>
        </div>
    )
}

export default Track


//[calc((var(--hero-cards-col-gap)/2)+max(0rem,calc(0.75rem-0.75rem/2))*-1)]