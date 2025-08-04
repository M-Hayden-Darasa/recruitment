import React from 'react'

import { ReasonInterface } from '@/models/home'

import ImageCommon from '@/components/ui/image'

function CardReason({ product }: { product: ReasonInterface }) {
  const { thumbnail, button } = product

  return (
    <section className="group w-full relative group cursor-pointer">
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
        <ImageCommon src={thumbnail} />
      </div>

      <div className="flex items-center justify-center h-[6vw] min-h-20 w-[86%] rounded-small bg-background-btn-reason absolute bottom-0 max-extrasmall-mobile:w-full">
        <div className="rounded-small">
          <ImageCommon src={button} />
        </div>
      </div>
    </section>
  )
}

export default CardReason
