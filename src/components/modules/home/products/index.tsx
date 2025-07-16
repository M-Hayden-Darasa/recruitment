import React from 'react'
import Marquee from 'react-fast-marquee'

import { DigitalProductsInterface } from '@/models/home'
import { digitalMarketingProducts } from '@/helpers/data/home'

import CardProduct from './card-product'

function Products() {
  return (
    <section className="pb-10 max-laptop:pb-8 max-tablet:pb-6 max-large-mobile:pb-4">
      <Marquee speed={30}>
        {digitalMarketingProducts?.map((product: DigitalProductsInterface, index: number) => (
          <CardProduct product={product} key={index} />
        ))}
      </Marquee>
    </section>
  )
}

export default Products
