import React from 'react'
import { useTranslation } from 'next-i18next'

import { Typography } from '@/components/ui/typography'

function Reason() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container padding-global bg-[url('https://framerusercontent.com/images/27ztwZ9gzFI44r6nNeAxWSbR5c.jpg?scale-down-to=4096')] bg-cover bg-center my-10 max-laptop:my-8 max-large-mobile:my-6 max-mobile:my-4">
      <div className="container flex">
        <div className="flex flex-col gap-5 max-mobile:gap-3 py-5 px-12 max-tablet:px-8 border-l-[1px] border-background basis-2/3 max-tablet:basis-full max-large-mobile:px-4">
          <Typography variant="h4" className="!text-text-compose">
            {t('compose-was-born')}
          </Typography>
          <Typography variant="p" className="!text-text-compose uppercase">
            {t('davide-gotlieb')}
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default Reason
