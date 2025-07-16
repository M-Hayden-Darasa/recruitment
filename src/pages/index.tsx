import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Main from '@/components/modules/home'

export default function Home() {
  return <Main />
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
