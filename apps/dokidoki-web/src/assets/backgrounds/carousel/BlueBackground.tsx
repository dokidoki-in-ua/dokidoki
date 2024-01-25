const BlueBackground = ({ bgActive }: { bgActive: number }) => {
    const activeClass =
        bgActive === 1 || bgActive === 3 ? 'opacity-1' : 'opacity-0 '

    return (
        <div
            className={`absolute inset-0 overflow-hidden bg-gradient-to-r from-[#2b9eb8bf] via-[#4e60bd] to-[#2ecfcca6] [transition:opacity_0.5s_ease-in-out] ${activeClass}`}
        >
            <div className='relative inset-0 flex h-full w-10/12 justify-center [margin:0_auto]'>
                <svg
                    className='absolute h-[1100px]'
                    viewBox='0 0 451.8 262'
                    aria-hidden='true'
                    role='img'
                >
                    <linearGradient
                        id='blue_background_component_color'
                        gradientUnits='userSpaceOnUse'
                        x1='65.42'
                        x2='315.72'
                        y1='7.12'
                        y2='233.33'
                    >
                        <stop offset='0' stopColor='#46464633'></stop>
                        <stop offset='1' stopColor='#2abdbb'></stop>
                    </linearGradient>
                    <path
                        d='M 0 0 L 32.725 0 C 46.2 35.35 36.925 74.7833 0.875 121.975 C 26.075 74.725 28.35 28.175 0 0'
                        fill='url(#blue_background_component_color)'
                    ></path>
                </svg>

                <svg
                    className='absolute h-[1100px]'
                    viewBox='0 0 451.8 262'
                    aria-hidden='true'
                    role='img'
                >
                    <linearGradient
                        id='blue_background_component_color'
                        gradientUnits='userSpaceOnUse'
                        x1='65.42'
                        x2='315.72'
                        y1='7.12'
                        y2='233.33'
                    >
                        <stop offset='0' stopColor='#46464633'></stop>
                        <stop offset='1' stopColor='#2abdbb'></stop>
                    </linearGradient>
                    <path
                        d='M 0 0 M 74.2 137.9 C 59.4417 87.6167 33.775 71.05 2.8 44.275 C 46.375 64.925 79.5083 88.2 114.275 139.125'
                        fill='url(#blue_background_component_color)'
                    ></path>
                </svg>

                <svg
                    className='absolute h-[1200px] translate-x-[69%]'
                    viewBox='0 0 451.8 262'
                    aria-hidden='true'
                    role='img'
                >
                    <linearGradient
                        id='blue_background_component_color'
                        gradientUnits='userSpaceOnUse'
                        x1='65.42'
                        x2='315.72'
                        y1='7.12'
                        y2='233.33'
                    >
                        <stop offset='0' stopColor='#46464633'></stop>
                        <stop offset='1' stopColor='#2abdbb'></stop>
                    </linearGradient>
                    <path
                        d='M 0 0 M 74.2 137.9 C 59.4417 87.6167 33.775 71.05 2.8 44.275 C 46.375 64.925 79.5083 88.2 114.275 139.125'
                        fill='url(#blue_background_component_color)'
                        transform='translate(31 0)'
                    ></path>
                </svg>

                <svg
                    className='absolute h-[1200px] translate-x-[68.555%]'
                    viewBox='0 0 451.8 262'
                    aria-hidden='true'
                    role='img'
                >
                    <linearGradient
                        id='blue_background_component_color'
                        gradientUnits='userSpaceOnUse'
                        x1='65.42'
                        x2='315.72'
                        y1='7.12'
                        y2='233.33'
                    >
                        <stop offset='0' stopColor='#46464633'></stop>
                        <stop offset='1' stopColor='#2abdbb'></stop>
                    </linearGradient>
                    <path
                        d='M 0 0 L 32.725 0 C 27 27 36.925 74.7833 74 110 C 26.075 74.725 2 44 0 0'
                        fill='url(#blue_background_component_color)'
                    ></path>
                </svg>
            </div>
        </div>
    )
}
export default BlueBackground
