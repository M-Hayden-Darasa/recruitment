import React from 'react'
import { useTranslation } from 'next-i18next'

import { OurProjectsInterface } from '@/models/home'

import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'

import icNote from '@/public/icons/home/ic-note.svg'

function CardProject({ project }: { project: OurProjectsInterface }) {
  const { t } = useTranslation('home')

  const { newspaper, year, label, content, own, departments, thumnail } = project

  return (
    <section>
      <div className="overflow-hidden rounded-small">
        <ImageCommon
          src={thumnail}
          height={500}
          width={730}
          className="rounded-small min-h-[330px] max-tablet:w-full transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="flex items-center justify-between gap-[10px] mt-5">
        <Typography variant="p" className="text-text">
          {newspaper || ''}
        </Typography>
        <Typography variant="p" className="text-text">
          {year || ''}
        </Typography>
      </div>

      <Typography variant="h4" className="mt-4">
        {t(`our-projects-card.${label}`) || ''}
      </Typography>

      <div className="flex mt-5 overflow-hidden gap-1">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6">
            <ImageCommon src={icNote} />
          </div>
          <div className="h-full w-[1px] bg-text-light" />
        </div>

        <div>
          <Typography className="text-text">{t(`our-projects-card.${content}`) || ''}</Typography>
          <Typography variant="p" className="mt-4">
            {own}
          </Typography>
          <Typography variant="p" className="text-text">
            {departments}
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default CardProject
