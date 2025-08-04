import { MenuFootersInterface, MultipleLanguageInterface, SocicalsInterface } from '@/models/footer'

import icRc from '@/public/icons/common/ic-rc.svg'
import icInstagram from '@/public/icons/common/ic-insta.svg'
import icYoutube from '@/public/icons/common/ic-youtube.svg'
import icEngFlag from '@/public/icons/common/ic-eng-flag.svg'
import icFacebook from '@/public/icons/common/ic-facebook.svg'
import icVietnamFlag from '@/public/icons/common/ic-vietnamese-flag.svg'

const footerMenus: MenuFootersInterface[] = [
  {
    key: 'links',
    menus: [
      {
        key: 'home',
      },
      {
        key: 'about',
      },
      {
        key: 'services',
      },
      {
        key: 'projects',
      },
    ],
  },
  {
    key: 'support',
    menus: [
      {
        key: 'contact',
      },
      {
        key: 'book-a-call',
      },
      {
        key: 'blog',
      },
      {
        key: 'careers',
      },
    ],
  },
  {
    key: 'social-media',
    menus: [
      {
        key: 'instagram',
      },
      {
        key: 'twitter',
      },
      {
        key: 'facebook',
      },
      {
        key: 'behance',
      },
    ],
  },
]

const footerSocicals: SocicalsInterface[] = [
  {
    key: 'instal',
    icon: icInstagram?.src,
  },
  {
    key: 'youtube',
    icon: icYoutube?.src,
  },
  {
    key: 'facebook',
    icon: icFacebook?.src,
  },
  {
    icon: icRc?.src,
    key: 'rc',
  },
]

const multipleLanguages: MultipleLanguageInterface[] = [
  {
    key: 'eng',
    icon: icEngFlag,
    value: 'en',
    label: 'english',
  },
  {
    key: 'vietnam',
    icon: icVietnamFlag,
    value: 'vi',
    label: 'vietnamese',
  },
]

export { footerMenus, footerSocicals, multipleLanguages }
