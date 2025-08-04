import React from 'react'
import { ReactSVG } from 'react-svg'
import { useTranslation } from 'next-i18next'

import { cn } from '@/lib/utils'
import { OurServices } from '@/helpers/data/home'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import icArrowRight from '@/public/icons/common/ic-arrow-right.svg'

function Reason() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container padding-global">
      <div className="container flex gap-24 max-tablet:flex-col max-tablet:gap-10">
        <div className="basis-1/2">
          <Typography variant="p" className="uppercase mb-[10px]">
            {t('our-services')}
          </Typography>
          <Typography variant="h3">{t('empowering')}</Typography>
          <Typography className="text-text mt-7 max-tablet:mt-4">
            {t('we-are-a-dynamic')}
          </Typography>
        </div>

        <div className="basis-1/2">
          <Accordion type="single" collapsible className="w-full" defaultValue="services-1">
            {OurServices?.map((services) => (
              <AccordionItem
                value={services?.value}
                key={services?.value}
                className="border-text-light"
              >
                <AccordionTrigger className="cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-button-text">
                  <Typography variant="h4">{t(services?.label)}</Typography>
                </AccordionTrigger>
                <AccordionContent>
                  <Typography className="text-text headline-extrasmall-thin">
                    {t(services?.content)}
                  </Typography>

                  <div className="group flex cursor-pointer items-center gap-2 relative w-fit mt-5">
                    <Typography
                      className="uppercase before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-background-foreground before:transition-all before:duration-300 hover:before:w-full"
                      variant="p"
                    >
                      {t('our-services')}
                    </Typography>
                    <ReactSVG
                      src={icArrowRight?.src}
                      width={14}
                      height={14}
                      className="text-button-icon transition-transform duration-300 group-hover:translate-x-[3px]"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button
            className={cn('leading-4 mt-5')}
            textContent={
              <Typography className="flip-content-button" variant="p">
                {t('more-services')}
              </Typography>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Reason
