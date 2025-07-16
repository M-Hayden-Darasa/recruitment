import React from 'react'
import { ReactSVG } from 'react-svg'
import { useTranslation } from 'next-i18next'

import { cn } from '@/lib/utils'
import { customerAvatars } from '@/helpers/data/home'
import { AvatarCustomerInterface } from '@/models/home'

import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'

import icPlus from '@/public/icons/home/ic-plus.svg'
import icStart from '@/public/icons/home/ic-start.svg'
import icArrowRight from '@/public/icons/common/ic-arrow-right.svg'

function TheDigitalMarketing() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container pt-12 pb-12 max-extralarge-laptop:pb-8 max-tablet:pb-6 max-laptop:pt-10 max-laptop:pb-20 max-large-mobile:pt-6 max-large-mobile:pb-14 mt-24">
      <div className="container flex flex-col gap-12 max-extralarge-laptop:gap-8 max-tablet:gap-6">
        <div className=" flex gap-[30px] max-tablet:gap-5 justify-between max-tablet:flex-col">
          <div className="flex flex-col gap-7 basis-2/4 max-extralarge-laptop:basis-4/7 max-large-laptop:basis-5/7">
            <Typography variant="h1" className="capitalize">
              {t('the-digital-marketing-agency')}
            </Typography>

            <div className="flex gap-[30px] max-extrasmall-mobile:flex-col max-extrasmall-mobile:gap-2">
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[5px]">
                  {Array(5)
                    ?.fill(0)
                    ?.map((_, index: number) => (
                      <ReactSVG
                        key={index}
                        src={icStart?.src}
                        width={14}
                        height={14}
                        className="text-button-text"
                      />
                    ))}
                </div>

                <div className="flex items-center gap-[5px]">
                  <Typography variant="h2">4.9</Typography>
                  <Typography className="!text-content-medium text-text">/ 5.0</Typography>
                </div>
              </div>
              <div className="h-full w-[1px] bg-text-light max-extrasmall-mobile:h-[1px] max-extrasmall-mobile:w-full" />

              <div className="flex flex-col gap-[10px]">
                <div className="flex">
                  {customerAvatars?.map((avatar: AvatarCustomerInterface, index: number) => (
                    <ImageCommon
                      key={index}
                      src={avatar?.href}
                      width={42}
                      height={42}
                      className={cn(index !== 0 && '-ml-2')}
                    />
                  ))}

                  <div className="bg-button-color rounded-full w-[42px] h-[42px] flex items-center justify-center -ml-2">
                    <ReactSVG
                      src={icPlus?.src}
                      width={24}
                      height={24}
                      className="text-button-text"
                    />
                  </div>
                </div>

                <Typography className="!text-content-macro text-text">{t('trusted-by')}</Typography>
              </div>
            </div>
          </div>

          <div className="flex basis-1/4 flex-col justify-end gap-[30px] max-tablet:gap-5 max-extralarge-laptop:basis-2/7">
            <Typography className="text-text content-small-thin">
              {t('choose-success-with')}
            </Typography>

            <div className="flex items-center gap-6">
              <div className="group flex cursor-pointer items-center gap-2 relative">
                <Typography
                  className=" uppercase before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-background-foreground before:transition-all before:duration-300 hover:before:w-full"
                  variant="p"
                >
                  {t('book-a-call')}
                </Typography>
                <ReactSVG
                  src={icArrowRight?.src}
                  width={14}
                  height={14}
                  className="text-button-text transition-transform duration-300 group-hover:translate-x-[3px]"
                />
              </div>
              <div className="group flex cursor-pointer items-center gap-2 relative">
                <Typography
                  className=" uppercase before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-background-foreground before:transition-all before:duration-300 hover:before:w-full"
                  variant="p"
                >
                  {t('our-services')}
                </Typography>
                <ReactSVG
                  src={icArrowRight?.src}
                  width={14}
                  height={14}
                  className="text-button-text transition-transform duration-300 group-hover:translate-x-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-text-light" />
      </div>
    </section>
  )
}

export default TheDigitalMarketing
