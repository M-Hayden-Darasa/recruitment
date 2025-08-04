import React from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'next-i18next'

import { DigitalProductsInterface } from '@/models/home'
import { digitalMarketingProducts } from '@/helpers/data/home'

import CardProduct from './card-product'
import { Typography } from '@/components/ui/typography'

function Products() {
  const { t } = useTranslation('home')

  return (
    <section className="pb-10 max-laptop:pb-8 max-tablet:pb-6 max-large-mobile:pb-4 mt-10">
      <div className="max-container">
        <div className="container mb-5">
          <div className="flex items-center gap-1 py-2 px-4 w-fit border-l-4 border-button-color bg-[linear-gradient(90deg,#000_20.93%,rgba(0,0,0,0.5)_58.06%,transparent_90%)]">
            <Typography variant="h4" className="uppercase !text-text-banner !font-[700]">
              rc88
            </Typography>
            <Typography variant="h4" className="uppercase !font-blold !text-button-color">
              {t('exclusive')}
            </Typography>
          </div>
        </div>
      </div>
      <Marquee speed={30}>
        {digitalMarketingProducts?.map((product: DigitalProductsInterface, index: number) => (
          <CardProduct product={product} key={index} />
        ))}
      </Marquee>
    </section>
  )
}

export default Products
