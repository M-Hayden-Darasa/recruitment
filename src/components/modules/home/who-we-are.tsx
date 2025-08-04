import React from 'react'
import { ReactSVG } from 'react-svg'
import { useTranslation } from 'next-i18next'

import ImageCommon from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import imgWhoWeAre from '@/public/images/common/img-who-we-are.webp'
import icMosquitoDiagonalRight from '@/public/icons/common/ic-mosquito-diagonal-right.svg'

function WhoWeAre() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container padding-global">
      <div className="container ">
        <Typography variant="p" className="uppercase mb-[10px]">
          {t('who-we-are')}
        </Typography>

        <div className="flex gap-[30px] max-tablet:gap-5 max-laptop:flex-col">
          <Typography variant="h3" className="basis-1/2">
            {t('we-are-a-dynamic')}
          </Typography>
          <Typography className="text-text basis-1/2">{t('whether-you-are')}</Typography>
        </div>

        <div className="flex gap-[30px] max-tablet:gap-5 max-large-mobile:flex-col">
          <div className="basis-1/2 ">
            <ImageCommon
              src={imgWhoWeAre}
              width={700}
              className="w-full mt-12 max-tablet:mt-8 max-large-mobile:mt-4 rounded-small h-[580px] max-mobile:h-100"
            />
          </div>
          <div className="basis-1/2 flex flex-col gap-7 max-laptop:gap-4">
            <ImageCommon
              src="https://framerusercontent.com/images/uhCCHZ04fu9WiPWGbLonWoslM.jpg?scale-down-to=2048"
              width={700}
              className="w-full mt-12 max-tablet:mt-8 max-large-mobile:mt-4 rounded-small h-[400px] max-laptop:h-[320px]"
            />
            <div className="flex gap-7 max-laptop:gap-4 max-large-mobile:flex-col max-laptop:flex-col">
              <Typography className="text-text basis-1/2">{t('founded-on-the')}</Typography>
              <Typography className="text-text basis-1/2">{t('our-mission-is')}</Typography>
            </div>
            <div className="flex gap-[10px] ">
              <Button
                variant="icon"
                textContent={
                  <div className="flex gap-[10px]">
                    <Typography variant="p" className="flip-content-button uppercase">
                      {t(`more-about-us`)}
                    </Typography>
                    <ReactSVG
                      src={icMosquitoDiagonalRight?.src}
                      className="icon text-button-text w-6 h-6 [&>div]:w-6 [&>div]:h-6 [&>div>svg]:w-6 [&>div>svg]:h-6 ic-mosquito"
                    />
                  </div>
                }
                className="bg-button-color border-0"
              />

              <Button
                textContent={
                  <Typography variant="p" className="flip-content-button uppercase">
                    {t(`our-projects`)}
                  </Typography>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
