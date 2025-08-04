import React from 'react'

import { PopularGenreProductsInterface } from '@/models/home'

import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating'

function CardPopularGenre({ product }: { product: PopularGenreProductsInterface }) {
  const { href, nameProduct, ratings } = product

  return (
    <section className="group w-full">
      <div className="bg-background-card-popular rounded-small shadow-lg p-4 w-full max-w-sm relative border border-card-popular-border cursor-pointer min-w-full">
        <div className="w-full h-50 rounded-small">
          <ImageCommon
            src={href}
            className="w-full h-50 rounded-small transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <Typography variant="h3" className="mt-7 group-hover:text-background-rating-start">
          {nameProduct}
        </Typography>

        <div className="mt-4 flex items-center justify-between max-small-mobile:flex-col max-small-mobile:gap-2">
          <div className="rounded-full border border-card-popular-border flex items-center gap-2 w-fit py-2 px-3 max-small-mobile:w-full">
            <Typography
              variant="h5"
              className="bg-background-rating-start w-fit rounded-full p-2 !text-background-card-popular"
            >
              {ratings}
            </Typography>
            <div>
              <Rating defaultValue={ratings} className="gap-0">
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton
                    key={index}
                    className="[&>svg]:text-background-rating-start"
                    size={12}
                  />
                ))}
              </Rating>
              <Typography className="!button-text text-xs">5.5 Raitings</Typography>
            </div>
          </div>

          <div className="border w-[0.5px] h-14 border-background-rating-start border-dashed max-small-mobile:hidden" />

          <div className="rounded-full border border-card-popular-border flex items-center gap-2 w-fit py-2 px-3 max-small-mobile:w-full">
            <Typography
              variant="h5"
              className="bg-background-rating-start w-fit rounded-full p-2 !text-background-card-popular"
            >
              {ratings}
            </Typography>
            <div>
              <Rating defaultValue={ratings} className="gap-0">
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton
                    key={index}
                    className="[&>svg]:text-background-rating-start"
                    size={12}
                  />
                ))}
              </Rating>
              <Typography className="!button-text text-xs">5.5 Raitings</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardPopularGenre
