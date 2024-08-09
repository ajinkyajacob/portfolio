import { ViewTransitions } from 'next-view-transitions'
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Header from '@/components/header/header'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
    <div className="flex flex-col min-h-[100dvh] ">
      <Header/>
        {children}


    </div>

      </body>
    </html>
    </ViewTransitions>
  )
}