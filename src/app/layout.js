import './globals.css'
import Navigation from '@/components/organisms/Navigation'

export const metadata = {
  title: 'Rainy McRainface',
  description: 'Generated by create next app',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center min-h-screen w-screen bg-wow p-10'>
        <Navigation title={metadata.title} />
        {children}
      </body>
    </html>
  )
}
