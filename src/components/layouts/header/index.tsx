import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useSearchParams } from 'next/navigation'

import { Drawer } from 'vaul'

import { cn } from '@/lib/utils'
import { headerMenus } from '@/helpers/data/header'
import { HeaderMenusInterface } from '@/models/header'
import { DEFAULT_ACTIVE_MENU, KEY_REF_HEADER_MENU } from '@/helpers/constants/header.constant'

import ThemeToggle from '../dark-light'
import ImageCommon from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import icClose from '@/public/icons/common/ic-close.svg'
import icArrowRight from '@/public/icons/common/ic-arrow-right.svg'
import icDigitalLogo from '@/public/icons/common/ic-digital-logo.svg'

function Header() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isMobileMenus, setIsMobileMenus] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const menuActive = searchParams.get(KEY_REF_HEADER_MENU) || DEFAULT_ACTIVE_MENU

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleRefHeaderMenus(refValue: string): void {
    router.push({
      pathname: router?.pathname,
      query: {
        [KEY_REF_HEADER_MENU]: refValue || '',
      },
    })
  }

  function handleTriggerOpenMobileMenu(): void {
    setIsMobileMenus(true)
  }

  function handleTriggerCloseMobileMenu(): void {
    setIsMobileMenus(false)
  }

  return (
    <header
      className={cn(
        'max-container fixed top-0 transition-all duration-300 z-10',
        isScrolled ? 'py-2' : 'py-6',
      )}
    >
      <div
        className={cn(
          'container px-6 py-3 bg-[#f5f5f5]/70 flex justify-between rounded-full items-center max-tablet:px-3 transition-all duration-300 backdrop-blur-md',
          isScrolled ? 'py-2' : 'py-3',
        )}
      >
        <div
          className={cn(
            'w-32 h-10 max-tablet:w-24 max-tablet:h-8 transition-all duration-300',
            isScrolled && 'w-30',
          )}
        >
          <ImageCommon src={icDigitalLogo} alt="default logo" />
        </div>
        <div className="p-[6px] flex items-center justify-between gap-[10px] bg-background-dark rounded-full max-tablet:hidden">
          {headerMenus?.map((menu: HeaderMenusInterface) => (
            <Button
              key={menu?.key}
              onClick={() => handleRefHeaderMenus(menu?.refValue)}
              size="sm"
              variant="outline"
              className={cn(
                'leading-4 hover:bg-button-hover',
                menuActive === menu?.refValue && 'bg-button-color hover:bg-button-color',
              )}
              textContent={
                <Typography className="flip-content-button uppercase" variant="p">
                  {t(`header.${menu?.label}`) || ''}
                </Typography>
              }
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-[10px] max-tablet:hidden">
          <Button
            className={cn('leading-4 ')}
            textContent={
              <Typography className="flip-content-button">{t(`header.contact-us`)}</Typography>
            }
          />
          {/* TODO */}
          {/* <Button
            size="icon"
            variant="icon"
            textContent={
              <ImageCommon src={icMosquitoDiagonalRight} width={18} height={18} className="icon" />
            }
          /> */}

          <ThemeToggle />
        </div>

        <div className="gap-2 hidden max-tablet:flex">
          <Drawer.Root direction="right" open={isMobileMenus}>
            <div className="hidden max-tablet:flex items-center justify-between gap-[10px] z-10">
              <Typography
                className={cn(
                  'transition-transform duration-300 ease-in-out uppercase text-content-macro',
                )}
              >
                {t(isMobileMenus ? 'header.close' : 'header.menu')}
              </Typography>

              <div
                className="hidden max-tablet:flex relative w-8 h-8 flex-col justify-center items-center group cursor-pointer"
                onClick={handleTriggerOpenMobileMenu}
              >
                <span
                  className={cn(
                    'block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out',
                    isMobileMenus && 'rotate-45 translate-y-1.5',
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-6 bg-black my-1 transition duration-300 ease-in-out',
                    isMobileMenus && 'opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out',
                    isMobileMenus && '-rotate-45 -translate-y-1.5',
                  )}
                />
              </div>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                  className="right-5 top-24 bottom-2 fixed outline-none w-fit overflow-y-scroll flex min-w-70 z-10"
                  style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
                >
                  <div className="max-tablet:bg-[#f5f5f5]/70 backdrop-blur-md h-full w-full grow p-5 flex flex-col rounded-[16px] relative">
                    <div className="absolute top-3 right-3" onClick={handleTriggerCloseMobileMenu}>
                      <ImageCommon
                        src={icClose}
                        width={22}
                        height={22}
                        className="transition-transform duration-300 hover:rotate-120 cursor-pointer "
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] mt-6">
                      {headerMenus?.map((menu: HeaderMenusInterface) => (
                        <Button
                          key={menu?.key}
                          onClick={() => handleRefHeaderMenus(menu?.refValue)}
                          size="sm"
                          variant="outline"
                          className={cn(
                            'leading-4 hover:bg-button-hover',
                            menuActive === menu?.refValue &&
                              'bg-button-color hover:bg-button-color',
                          )}
                          textContent={
                            <Typography className="flip-content-button uppercase" variant="p">
                              {t(`header.${menu?.label}`) || ''}
                            </Typography>
                          }
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-[10px] mt-10">
                      <Button
                        className={cn('leading-4 ')}
                        textContent={
                          <Typography className="flip-content-button">
                            {t(`header.contact-us`)}
                          </Typography>
                        }
                      />
                      {/* <Button
                      size="icon"
                      variant="icon"
                      textContent={
                        <ImageCommon
                          src={icMosquitoDiagonalRight}
                          width={18}
                          height={18}
                          className="icon"
                        />
                      }
                    /> */}
                    </div>

                    <div className="flex items-center gap-[10px] mt-10">
                      <Typography
                        className="group flex items-center gap-0.5 uppercase relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full"
                        variant="p"
                      >
                        {t('header.book-a-call')}
                        <ImageCommon
                          src={icArrowRight}
                          width={16}
                          height={16}
                          className="transition-transform duration-300 group-hover:translate-x-[3px]"
                        />
                      </Typography>

                      <Typography
                        className="group flex items-center gap-0.5 uppercase relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full"
                        variant="p"
                      >
                        {t('header.our-services')}
                        <ImageCommon
                          src={icArrowRight}
                          width={16}
                          height={16}
                          className="transition-transform duration-300 group-hover:translate-x-[3px]"
                        />
                      </Typography>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </div>
          </Drawer.Root>
          <div className="hidden max-tablet:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
