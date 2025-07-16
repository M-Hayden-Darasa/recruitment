import React from 'react'

import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'
import { DigitalProductsInterface } from '@/models/home'

function CardProduct({ product }: { product: DigitalProductsInterface }) {
  const { href, nameProduct, typeProduct } = product

  return (
    <section className="ml-7">
      <ImageCommon
        src={href}
        width={450}
        height={330}
        className="rounded-small min-h-[330px] max-extrasmall-mobile:max-w-[330px]"
      />
      <div className="flex items-center justify-between mt-4">
        <Typography className="content-medium">{nameProduct || ''}</Typography>
        <Typography variant="p" className="text-text uppercase">
          {typeProduct || ''}
        </Typography>
      </div>
    </section>
  )
}

export default CardProduct
