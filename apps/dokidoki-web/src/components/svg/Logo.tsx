import React from 'react'

type propTypes = {
    className: string
}

export const Logo = ({ ...props }: propTypes) => {
    return (
        <svg viewBox='0 0 140 24' xmlns='http://www.w3.org/2000/svg' {...props}>
            <g
                id='svgGroup'
                strokeLinecap='round'
                fillRule='nonzero'
                fontSize='9pt'
            >
                <path
                    d='M 21.6513 12.3566 L 21.6627 12.248 C 18.4386 17.6684 11.2986 19.7142 6.9984 14.4342 C 8.3995 15.0168 9.7173 15.4819 11.2631 15.4141 C 16.2951 15.1934 19.355 10.7136 19.355 6.0143 L 19.357 5.8442 C 19.1712 6.9241 18.8528 7.8583 18.3788 8.6387 C 17.9671 9.3164 17.3862 9.9061 16.7306 10.3489 C 11.5811 13.8265 5.0099 6.8508 9.2056 2.0777 C 9.9062 1.2805 10.7245 0.7291 12.3923 0.3084 C 10.8319 -0.0364 9.4235 0.2192 8.5293 0.4251 C 5.5517 1.1107 2.7912 3.1338 1.4334 5.9049 C -2.3432 13.6129 4.0118 23.3402 12.9033 21.5415 C 14.9321 21.1311 16.8745 20.2663 18.3708 18.8066 C 20.1529 17.0682 21.3365 14.8343 21.6513 12.3566 z M 27.061 14.609 L 29.0628 10.9838 L 29.0628 15.698 L 32.1246 15.698 A 6.5172 6.5172 90 0 0 33.3837 15.5804 C 34.8963 15.2826 36.0286 14.4277 36.598 13.119 A 5.3217 5.3217 90 0 0 37.0089 10.9838 C 37.0089 8.0192 35.0649 6.2696 32.1246 6.2696 L 24.3 6.2696 L 24.3 2.4788 L 32.319 2.4788 C 36.1068 2.4788 39.0828 3.9706 40.628 6.5268 A 8.5087 8.5087 90 0 1 41.796 10.9838 A 10.363 10.363 90 0 1 41.7896 11.3488 C 41.6658 14.8611 39.7509 17.4621 36.7078 18.6944 A 11.6741 11.6741 90 0 1 32.319 19.4888 L 24.3 19.4888 L 27.061 14.609 Z M 69.5709 11.9558 L 75.5001 19.4888 L 69.984 19.4888 L 66.2661 14.8232 L 64.881 16.2569 L 64.881 19.4888 L 60.3126 19.4888 L 60.3126 1.4582 L 64.881 1.4582 L 64.881 10.9352 L 69.6438 6.3182 L 75.0384 6.3182 L 69.5709 11.9558 Z M 126.8946 11.9558 L 132.8238 19.4888 L 127.3077 19.4888 L 123.5898 14.8232 L 122.2047 16.2569 L 122.2047 19.4888 L 117.6363 19.4888 L 117.6363 1.4582 L 122.2047 1.4582 L 122.2047 10.9352 L 126.9675 6.3182 L 132.3621 6.3182 L 126.8946 11.9558 Z M 98.4636 1.4582 L 98.4636 19.4888 L 94.1139 19.4888 L 94.1139 18.1523 A 4.0238 4.0238 90 0 1 93.5096 18.7388 C 92.6804 19.3886 91.5898 19.7075 90.2259 19.7075 C 86.6295 19.7075 83.7621 17.0831 83.7621 12.9035 A 7.9663 7.9663 90 0 1 84.0991 10.558 A 6.21 6.21 90 0 1 90.2259 6.0995 A 6.4527 6.4527 90 0 1 91.6845 6.2558 A 4.3141 4.3141 90 0 1 93.8952 7.4846 L 93.8952 1.4582 L 98.4636 1.4582 Z M 88.6003 14.3206 A 2.6568 2.6568 90 0 0 91.1736 16.0625 C 92.7531 16.0625 93.9924 14.9204 93.9924 12.9035 A 4.8384 4.8384 90 0 0 93.9911 12.7914 C 93.9798 12.3014 93.8938 11.8651 93.7469 11.4864 A 2.6568 2.6568 90 0 0 91.1736 9.7445 C 89.5941 9.7445 88.3548 10.8866 88.3548 12.9035 A 4.8384 4.8384 90 0 0 88.3561 13.0156 C 88.3674 13.5055 88.4534 13.9419 88.6003 14.3206 Z M 50.7384 19.7075 A 8.7723 8.7723 90 0 1 48.0822 19.3106 A 6.5837 6.5837 90 0 1 43.3026 12.9035 A 6.4852 6.4852 90 0 1 46.8732 6.9912 A 8.3691 8.3691 90 0 1 50.7384 6.0995 C 53.1376 6.0995 55.1556 6.9668 56.477 8.4193 A 6.5482 6.5482 90 0 1 58.1499 12.9035 C 58.1499 16.8644 55.0638 19.7075 50.7384 19.7075 Z M 48.1896 14.3917 A 2.6381 2.6381 90 0 0 50.7384 16.0625 A 2.7319 2.7319 90 0 0 52.3783 15.5508 C 52.8053 15.2367 53.1379 14.7827 53.3344 14.2019 A 4.0451 4.0451 90 0 0 53.5329 12.9035 A 4.8967 4.8967 90 0 0 53.5303 12.7437 C 53.5144 12.2576 53.426 11.8251 53.2777 11.4504 A 2.6233 2.6233 90 0 0 50.7384 9.7445 A 2.7892 2.7892 90 0 0 49.126 10.2231 C 48.6746 10.5373 48.3242 11.0013 48.1201 11.6004 A 4.0322 4.0322 90 0 0 47.9196 12.9035 A 4.8562 4.8562 90 0 0 47.9241 13.1129 C 47.9449 13.5941 48.0375 14.0217 48.1896 14.3917 Z M 108.0621 19.7075 A 8.7723 8.7723 90 0 1 105.4059 19.3106 A 6.5837 6.5837 90 0 1 100.6263 12.9035 A 6.4852 6.4852 90 0 1 104.1969 6.9912 A 8.3691 8.3691 90 0 1 108.0621 6.0995 C 110.4613 6.0995 112.4793 6.9668 113.8007 8.4193 A 6.5482 6.5482 90 0 1 115.4736 12.9035 C 115.4736 16.8644 112.3875 19.7075 108.0621 19.7075 Z M 105.5133 14.3917 A 2.6381 2.6381 90 0 0 108.0621 16.0625 A 2.7319 2.7319 90 0 0 109.702 15.5508 C 110.129 15.2367 110.4616 14.7827 110.6581 14.2019 A 4.0451 4.0451 90 0 0 110.8566 12.9035 A 4.8967 4.8967 90 0 0 110.854 12.7437 C 110.8381 12.2576 110.7497 11.8251 110.6014 11.4504 A 2.6233 2.6233 90 0 0 108.0621 9.7445 A 2.7892 2.7892 90 0 0 106.4497 10.2231 C 105.9983 10.5373 105.6479 11.0013 105.4438 11.6004 A 4.0322 4.0322 90 0 0 105.2433 12.9035 A 4.8562 4.8562 90 0 0 105.2478 13.1129 C 105.2686 13.5941 105.3612 14.0217 105.5133 14.3917 Z M 81.5022 19.4888 L 76.9338 19.4888 L 76.9338 6.3182 L 81.5022 6.3182 L 81.5022 19.4888 Z M 138.8259 19.4888 L 134.2575 19.4888 L 134.2575 6.3182 L 138.8259 6.3182 L 138.8259 19.4888 Z M 79.218 4.8359 A 3.461 3.461 90 0 1 78.1021 4.6607 A 2.344 2.344 90 0 1 76.4235 2.4059 A 2.3108 2.3108 90 0 1 77.9483 0.2319 A 3.3947 3.3947 90 0 1 79.218 0.0002 A 4.3114 4.3114 90 0 1 79.2624 0.0004 C 80.9144 0.0174 82.0125 0.9842 82.0125 2.333 A 2.3873 2.3873 90 0 1 80.5184 4.5849 A 3.2946 3.2946 90 0 1 79.218 4.8359 Z M 136.5417 4.8359 A 3.461 3.461 90 0 1 135.4258 4.6607 A 2.344 2.344 90 0 1 133.7472 2.4059 A 2.3108 2.3108 90 0 1 135.272 0.2319 A 3.3947 3.3947 90 0 1 136.5417 0.0002 A 4.3114 4.3114 90 0 1 136.5861 0.0004 C 138.2381 0.0174 139.3362 0.9842 139.3362 2.333 A 2.3873 2.3873 90 0 1 137.8421 4.5849 A 3.2946 3.2946 90 0 1 136.5417 4.8359 Z'
                    vectorEffect='non-scaling-stroke'
                />
            </g>
        </svg>
    )
}
