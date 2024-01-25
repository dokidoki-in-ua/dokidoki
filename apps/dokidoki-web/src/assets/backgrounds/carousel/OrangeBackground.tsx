const OrangeBackground = ({ bgActive }: { bgActive: number }) => {
    const activeClass =
        bgActive === 0 || bgActive === 4 ? 'opacity-1' : 'opacity-0 '

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0 flex justify-center overflow-hidden
        bg-gradient-to-l from-[#ef562374] via-[#f47521] to-[#ef4123d6] [transition:opacity_0.5s_ease-in-out] ${activeClass}`}
        >
            <svg
                className='absolute h-[1024px]'
                viewBox='0 0 4768 2768'
                aria-hidden='true'
                role='img'
            >
                <linearGradient
                    id='orange_upper_component_color'
                    gradientUnits='userSpaceOnUse'
                    x1='0%'
                    y1='50%'
                    x2='0%'
                    y2='100%'
                >
                    <stop offset='0' stopColor='#f47521'></stop>
                    <stop offset='1' stopColor='#fab718'></stop>
                </linearGradient>
                <path
                    d='M 694.182 378.703 C 1557.27 165.123 2587.124 141.717 3713.533 289.839 C 4468.217 715.206 4460.515 1765.033 3657.228 2643.393 C 4227.787 1265.794 3480.805 500.045 2433.53 515.059 C 1986.9 372.369 1732.814 636.165 1419.762 893.628 C 718.1 1592.364 778.159 2343.099 1348.717 2999.992 C 8.655 2485.739 404.536 914.11 700.034 378.703'
                    fill='url(#orange_upper_component_color)'
                    transform='translate(0 -1734)'
                    opacity='.8'
                ></path>
            </svg>

            <svg
                className='absolute h-[1024px]'
                viewBox='0 0 6212 3602'
                aria-hidden='true'
                role='img'
            >
                <linearGradient
                    id='orange_lower_component_color'
                    gradientUnits='userSpaceOnUse'
                    x1='0%'
                    y1='30%'
                    x2='0%'
                    y2='80%'
                >
                    <stop offset='0' stopColor='#f47521'></stop>
                    <stop offset='1' stopColor='#fab718'></stop>
                </linearGradient>
                <path
                    d='M 223.808 3693.142 C 1366.926 4353.61 4021.164 4256.987 6487.78 4001.645 C 6895.252 3061.744 5743.463 1698.074 4434.122 1252.572 C 8459.946 4903.517 -1275.903 4262.429 1455.832 1402.678 C 122.194 2075.848 300.0153 2909.894 215.34 3693.142'
                    fill='url(#orange_lower_component_color)'
                    transform='translate(0 -734)'
                    opacity='.9'
                ></path>
            </svg>
        </div>
    )
}
export default OrangeBackground
