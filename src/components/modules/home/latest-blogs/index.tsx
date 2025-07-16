import React from 'react'
import { useTranslation } from 'next-i18next'

import { LatestBlogInterface } from '@/models/home'
import { latestBlogs } from '@/helpers/data/home'

import CardBlog from './card-blog'
import { Typography } from '@/components/ui/typography'

function LatestBlogs() {
  const { t } = useTranslation('home')

  return (
    <section className="max-container padding-global">
      <div className="container ">
        <div>
          <Typography variant="p" className="uppercase mb-[10px]">
            {t('latest-blogs')}
          </Typography>
          <Typography variant="h2">{t('stay-up-to')}</Typography>
        </div>

        <div className="flex gap-7 flex-wrap max-tablet:gap-4 mt-12 max-tablet:mt-8 max-large-mobile:mt-4">
          {latestBlogs?.map((blog: LatestBlogInterface, index: number) => (
            <div key={index} className="w-[calc(33.333%-18.67px)] max-tablet:w-full">
              <CardBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlogs
