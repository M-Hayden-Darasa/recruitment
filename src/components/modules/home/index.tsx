import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'

import icDigitalLogo from '@/public/icons/common/ic-digital-logo.svg'

const TheDigitalMarketing = dynamic(() => import('./the-digital-marketing'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const Products = dynamic(() => import('./products'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const WhoWeAre = dynamic(() => import('./who-we-are'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const Reason = dynamic(() => import('./reason'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const OurServices = dynamic(() => import('./our-services'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const OurProjects = dynamic(() => import('./our-projects'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const LatestBlog = dynamic(() => import('./latest-blogs'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

function Home() {
  const { t } = useTranslation('home')

  return (
    <main>
      <Head>
        <title>Home|Compose digital</title>
        <meta name="keywords" content={t('compose-digital')} />
        <meta name="description" content={t('compose-digital-is-a-digital')} />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* TODO */}
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:type" content={t('compose-digital-is-a-digital')} />

        {/* Social TODO */}
        {/* twitter */}
        <meta name="twitter:image" content={icDigitalLogo} />
        <meta name="twitter:card" content={t('home-compose-digital')} />
        <meta name="twitter:site" content="@your_x_handle" />
        <meta name="twitter:creator" content="your_creator_handle" />
        <meta name="twitter:title" content={t('home-compose-digital')} />
        <meta name="twitter:description" content={t('compose-digital-is-a-digital')} />

        {/* facebook */}
        <meta property="og:image" content={icDigitalLogo} />
        <meta property="og:type" content={t('home-compose-digital')} />
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:title" content={t('home-compose-digital')} />
        <meta property="og:site_name" content="@your_facebook_handle" />
        <meta property="og:description" content={t('compose-digital-is-a-digital')} />
      </Head>
      <TheDigitalMarketing />
      <Products />
      <WhoWeAre />
      <Reason />
      <OurServices />
      <OurProjects />
      <LatestBlog />
    </main>
  )
}

export default Home
