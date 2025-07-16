import React from 'react'
import { ReactSVG } from 'react-svg'
import { useTranslation } from 'next-i18next'

import { OurProjectsInterface } from '@/models/home'
import { ourProjectsLeft, ourProjectsRight } from '@/helpers/data/home'

import CardProject from './card-project'
import ImageCommon from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import icMosquitoDiagonalRight from '@/public/icons/common/ic-mosquito-diagonal-right.svg'
import icArrowRight from '@/public/icons/common/ic-arrow-right.svg'

function WhoWeAre() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container padding-global">
      <div className="container ">
        <Typography variant="p" className="uppercase mb-[10px]">
          {t('our-projects')}
        </Typography>
        <Typography variant="h3">{t('showcasing-our-success-stories')}</Typography>

        <div className="flex mt-12 max-tablet:mt-8 max-large-mobile:mt-4 gap-12 max-tablet:gap-6 max-large-mobile:gap-4 max-tablet:flex-col">
          <div className="basis-1/2 flex flex-col gap-12">
            {ourProjectsLeft?.map((project: OurProjectsInterface) => (
              <CardProject project={project} key={project?.key} />
            ))}
          </div>
          <div className="basis-1/2 flex flex-col gap-12 items-center justify-center">
            {ourProjectsRight?.map((project: OurProjectsInterface) => (
              <CardProject project={project} key={project?.key} />
            ))}
          </div>
        </div>

        <div className="rounded-small bg-background-our-project p-12 flex gap-7 max-tablet:flex-col justify-between max-large-tablet:p-10 max-tablet:p-8 max-large-mobile:p-4 mt-12 max-large-tablet:mt-10 max-tablet:mt-8 max-large-mobile:mt-6">
          <Typography className="content-medium !text-background basis-1/2">
            {t('if-you-are')}
          </Typography>

          <div className="flex gap-4 items-center max-mobile:flex-col max-mobile:items-start">
            <Button
              variant="icon"
              textContent={
                <div className="flex gap-[10px]">
                  <Typography variant="p" className="flip-content-button uppercase">
                    {t(`see-more-projects`)}
                  </Typography>
                  <ImageCommon
                    src={icMosquitoDiagonalRight}
                    width={12}
                    height={12}
                    className="icon"
                  />
                </div>
              }
              className="bg-button-color border-0"
            />

            <div className="group flex cursor-pointer items-center gap-2 relative">
              <Typography
                className="uppercase before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-background before:transition-all before:duration-300 hover:before:w-full !text-background"
                variant="p"
              >
                {t('our-services')}
              </Typography>
              <ReactSVG
                src={icArrowRight?.src}
                width={14}
                height={14}
                className="text-background transition-transform duration-300 group-hover:translate-x-[3px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
