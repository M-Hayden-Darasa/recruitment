import type { AppProps } from 'next/app'
import { DM_Sans } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'

import { cn } from '@/lib/utils'

import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

import '@/styles/globals.css'

const geistDmSans = DM_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(geistDmSans.className)}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default appWithTranslation(App)
