import React from 'react'
import { useTranslation } from 'next-i18next'

import { Typography } from '@/components/ui/typography'
import { popularGenreProducts } from '@/helpers/data/home'
import { PopularGenreProductsInterface } from '@/models/home'
import CardPopularGenre from './card-product'

function PopularGenre() {
  const { t } = useTranslation('home')

  return (
    <section className="pb-10 max-laptop:pb-8 max-tablet:pb-6 max-large-mobile:pb-4 w-full">
      <div className="max-container">
        <div className="container mb-5">
          <div className="flex items-center gap-1 py-2 px-4 w-fit border-l-4 border-button-color bg-[linear-gradient(90deg,#000_20.93%,rgba(0,0,0,0.5)_58.06%,transparent_90%)]">
            <Typography variant="h4" className="uppercase !font-[700] !text-text-banner">
              rc88
            </Typography>
            <Typography variant="h4" className="uppercase !font-blold !text-[#acfc00]">
              {t('popular-genre')}
            </Typography>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 max-extralarge-laptop:grid-cols-3 max-large-mobile:grid-cols-1 max-large-tablet:grid-cols-2">
            {popularGenreProducts?.map((product: PopularGenreProductsInterface, index: number) => (
              <CardPopularGenre product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularGenre
