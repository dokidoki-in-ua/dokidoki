import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

export const metadata: Metadata = {
    title: 'Dokidoki',
    description:
        'Дайте волю своїм емоціям з Dokidoki: захоплива колекція аніме, що вразить ваше серце та додасть драйву до вашого дня! Погрузіться у світ пригод, емоцій та незабутніх моментів разом з Dokidoki!',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en' className={cn(rubik.variable)}>
            <body className='min-h-screen bg-background'>{children}</body>
        </html>
    )
}

export default RootLayout
