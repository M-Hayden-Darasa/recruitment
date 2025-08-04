import { ReactSVG } from 'react-svg'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'next-i18next'
import { Inter_Tight } from 'next/font/google'
import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import useModal from '@/hooks/useModal'
import { advertingBottom, advertingTop } from '@/helpers/data/home'
import { MenuFootersInterface, MultipleLanguageInterface } from '@/models/footer'
import { footerMenus, footerSocicals, multipleLanguages } from '@/helpers/data/footer'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'

import icClose from '@/public/icons/common/ic-close.svg'
import imgJackpot from '@/public/images/common/img-jackpot.webp'
import icBackToTop from '@/public/icons/common/ic-arrow-top.svg'
import imgGiftCode from '@/public/images/common/img-gift-code.gif'
import icDigitalLogo from '@/public/images/common/img-digital-logo.webp'

const geistInter = Inter_Tight({
  variable: '--font-geist-inter',
  preload: false,
})

function Footer() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const router = useRouter()
  const { visible: isJackPot, toggle: handleShowJackpot } = useModal()
  const { visible: isGiftCode, toggle: handleShowGiftCode } = useModal()

  const [isBackToTop, setIsBackToTop] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      handleShowJackpot()
      handleShowGiftCode()
    }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  async function handleChangeLanguage(locale: string) {
    await router.replace(router.asPath, undefined, {
      locale,
      scroll: false,
    })

    if (i18n) {
      i18n.changeLanguage(locale)
    }
  }

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section>
      <div className="bg-background-adverting py-16 max-large-laptop:py-1 max-tablet:py-10 max-large-mobile:py-6 flex flex-col gap-[10px] relative">
        <Marquee speed={60}>
          {advertingTop?.map((adverting: { content: string }, index: number) => (
            <Typography
              className={cn(geistInter.className, 'headline-large-bold mr-7')}
              key={index}
              style={{
                fontFamily: 'sans-serif-family, sans-serif',
                WebkitTextStroke: index % 2 === 0 ? '1px white' : '0px',
                color: index % 2 === 0 ? 'transparent' : '#fff',
              }}
            >
              {t(`${adverting?.content}`)}
            </Typography>
          ))}
        </Marquee>
        <Marquee speed={60} direction="right">
          {advertingBottom?.map((adverting: { content: string }, index: number) => (
            <Typography
              className={cn(geistInter.className, 'text-background headline-large-bold mr-7')}
              key={index}
              style={{
                fontFamily: 'sans-serif-family, sans-serif',
                WebkitTextStroke: index % 2 === 0 ? '1px white' : '0px',
                color: index % 2 === 0 ? 'transparent' : '#fff',
              }}
            >
              {t(`${adverting?.content}`)}
            </Typography>
          ))}
        </Marquee>
      </div>

      <div className="max-container bg-background-footer">
        <div className="flex justify-center flex-col items-center container ">
          <div className="flex items-center justify-center container py-12 max-tablet:py-8 max-large-mobile:py-4">
            <Typography className="text-[110px] leading-24 uppercase py-7 border-t border-t-background-foreground border-b  border-b-background-foreground max-extralarge-laptop:text-[72px] max-extralarge-laptop:leading-16 max-tablet:text-[52px] max-extralarge-laptop:tracking-[0px] !font-[600] !text-background text-center">
              {t('footer.tell-us-your-new-ideas')}
            </Typography>
          </div>

          <div className="flex w-full py-12 gap-12 max-tablet:flex-col">
            <div className="basis-1/3 ">
              <ImageCommon
                src={icDigitalLogo}
                height={40}
                width={130}
                className="text-button-text"
              />
              {/* <Typography className="mt-5">{t('footer.optimize-your-success')}</Typography> */}
            </div>

            <div className="flex gap-8 justify-between basis-2/3 max-extrasmall-mobile:flex-col">
              {footerMenus?.map((menu: MenuFootersInterface) => (
                <div key={menu?.key}>
                  <Typography className="content-medium !text-background">
                    {t(`footer.${menu?.key}`)}
                  </Typography>

                  <div className="flex flex-col gap-[10px] mt-4">
                    {menu?.menus?.map((children) => (
                      <Typography
                        key={children?.key}
                        className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0 before:bg-background-foreground before:transition-all before:duration-300 hover:before:w-full w-fit !text-background"
                      >
                        {t(`footer.${children?.key}`)}
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full bg-text-light" />

          <div className="py-12 container grid gap-12 grid-cols-2 justify-between max-large-mobile:grid-cols-1">
            <div className="flex gap-2 flex-col max-large-mobile:justify-center">
              <Typography className="!text-background">{t('footer.all-rights')}</Typography>
              <div className="flex gap-2 ">
                {footerSocicals?.map((social) => (
                  <ReactSVG
                    key={social?.key}
                    src={social?.icon}
                    className="cursor-pointer text-background"
                  />
                ))}
              </div>
            </div>

            {/* <div>
              <div className="flex flex-col gap-2 justify-center">
                <Typography className="text-center !text-background">
                  +66 2 821 5097 | Comnpose digital
                </Typography>
                <Typography className="text-center !text-background">
                  Center Building No. 173 Asia Tower, 27th Floor, Room No. 27, 112 S Sathon Rd,
                  Bangkok 10120
                </Typography>
              </div>
            </div> */}

            <div className="flex justify-end max-tablet:justify-start max-large-mobile:justify-center">
              <Select defaultValue={locale} onValueChange={handleChangeLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {multipleLanguages?.map((lang: MultipleLanguageInterface) => (
                      <SelectItem value={lang?.value} key={lang?.key}>
                        <ImageCommon width={24} height={12} src={lang?.icon} />
                        <Typography className="!text-text-select">
                          {t(`footer.${lang?.label}`)}
                        </Typography>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {isBackToTop && (
        <div className="fixed right-10 bottom-10 z-20 w-11 h-11" onClick={handleBackToTop}>
          <ReactSVG
            src={icBackToTop?.src}
            height={40}
            width={40}
            className=" transition-opacity duration-300 cursor-pointer text-button-text bg-button-color rounded-full h-full flex items-center justify-center"
          />
        </div>
      )}

      {isJackPot && (
        <div className="fixed z-20 right-8 bottom-50 cursor-pointer">
          <div className="relative">
            <div
              className="absolute -top-0 -right-1 bg-background-dark rounded-full z-[21]"
              onClick={handleShowJackpot}
            >
              <ImageCommon
                src={icClose}
                width={18}
                height={18}
                className="transition-transform duration-300 hover:rotate-120 cursor-pointer "
              />
            </div>
            <div className="w-30 h-10 animate-jackpot">
              <ImageCommon src={imgJackpot} />
            </div>
            <Typography className="text-[11px] uppercase !font-[900] !text-[#101010] absolute right-10 -bottom-6 transform -rotate-[5deg] animate-jackpot">
              {t('billion')}
            </Typography>
          </div>
        </div>
      )}

      {isGiftCode && (
        <div className="fixed z-20 right-10 bottom-80 cursor-pointer">
          <div className="relative">
            <div
              className="absolute -top-2 -right-2 bg-background-dark rounded-full z-[21]"
              onClick={handleShowJackpot}
            >
              <ImageCommon
                src={icClose}
                width={18}
                height={18}
                className="transition-transform duration-300 hover:rotate-120 cursor-pointer "
              />
            </div>
            <div className="w-18 h-5">
              <ImageCommon src={imgGiftCode} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Footer
