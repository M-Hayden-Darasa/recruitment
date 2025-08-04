import {
  AvatarCustomerInterface,
  DigitalProductsInterface,
  LatestBlogInterface,
  OurProjectsInterface,
  OurServicesInterface,
  PopularGenreProductsInterface,
  ReasonInterface,
} from '@/models/home'

import imgSport from '@/public/images/common/img-sport.webp'
import imgBigWin from '@/public/images/common/img-bigwin.webp'
import imgExplode from '@/public/images/common/img-explode.webp'
import imgBetGame from '@/public/images/common/img-bet-game.webp'
import imgFishBet from '@/public/images/common/img-fish-bet.webp'
import imgCardGame from '@/public/images/common/img-card-game.webp'
import imgCommunity from '@/public/images/common/img-community.webp'
import imgFreshNest from '@/public/images/common/img-fresh-nest.webp'
import imgBigWinSpeed from '@/public/images/common/img-bigwin-speed.webp'
import imgBigWinLivestream from '@/public/images/common/img-bigwin-livestream.jpg'

import imgBti from '@/public/images/common/img-bti-sport.webp'
import icBti from '@/public/icons/home/ic-btn-btc.svg'
import imgIbc from '@/public/images/common/img-ibc-sport.webp'
import icIbc from '@/public/icons/home/ic-btn-ibc.svg'
import imgK from '@/public/images/common/img-k-sport.webp'
import icK from '@/public/icons/home/ic-k-sport.svg'
import imgTechplay from '@/public/images/common/img-techplay.webp'
import icTechPlay from '@/public/icons/home/ic-techplay.svg'
import imgGsSport from '@/public/images/common/img-gs-sports.webp'
import icGsSport from '@/public/icons/home/ic-gs-sport.svg'

import imgBlog1 from '@/public/images/common/img-new1.webp'
import imgBlog2 from '@/public/images/common/img-new2.webp'
import imgBlog3 from '@/public/images/common/img-new3.webp'

const customerAvatars: AvatarCustomerInterface[] = [
  {
    href: 'https://framerusercontent.com/images/lMDBrC7KeO4pzPJudnY4iX67Y.svg',
  },
  {
    href: 'https://framerusercontent.com/images/OcyPvBf3EVyuXQ1vxN8VAVMMG3w.svg',
  },
  {
    href: 'https://framerusercontent.com/images/7c4EaCBaxTvCSTX5PtM6basU.svg',
  },
  {
    href: 'https://framerusercontent.com/images/6OIRUUD4YytzI1Qp0LdOcrdOa8s.svg',
  },
]

const digitalMarketingProducts: DigitalProductsInterface[] = [
  {
    href: imgBigWinLivestream,
    nameProduct: 'Xóc đĩa Livestream',
    typeProduct: 'Content Marketing',
  },
  {
    href: imgBetGame,
    nameProduct: 'Tài xỉu Livestream',
    typeProduct: 'Social Media Marketing',
  },
  {
    href: imgFreshNest,
    nameProduct: 'Bầu cua BigWin',
    typeProduct: 'Social Media Marketing',
  },
  {
    href: imgBigWin,
    nameProduct: 'Xóc đĩa BigWin',
    typeProduct: 'Performance Marketing',
  },
  {
    href: imgBigWinSpeed,
    nameProduct: 'Xóc đĩa Live siêu tốc',
    typeProduct: 'Content Marketing',
  },
  {
    href: imgCommunity,
    nameProduct: 'Sicbo BigWin',
    typeProduct: 'Community Building',
  },
]

export const OurServices: OurServicesInterface[] = [
  {
    value: 'services-1',
    label: 'our-product',
    content: 'we-provide',
  },
  {
    value: 'services-2',
    label: 'customer-service',
    content: 'we-are-always',
  },
  {
    value: 'services-3',
    label: 'website-development',
    content: 'our-website',
  },
  {
    value: 'services-4',
    label: 'diverse-account-options',
    content: 'offers-a-wide',
  },
  {
    value: 'services-5',
    label: 'responsible-gambling',
    content: 'strictly-adheres',
  },
  {
    value: 'services-6',
    label: 'security',
    content: 'we-enforce-a-strict',
  },
]

const ourProjectsLeft: OurProjectsInterface[] = [
  {
    key: 'freshNest',
    newspaper: 'freshNest',
    year: 2023,
    label: 'digital-strategy',
    content: 'the-digital-strategy-this-agency',
    own: '– Kimberly Rogers',
    departments: 'Marketing Director, FreshNest',
    thumnail: 'https://framerusercontent.com/images/VFwKdqS1n9i7HwO9yhU6Payuzk.jpg',
  },
  {
    key: 'LuxeFit',
    newspaper: 'LuxeFit',
    year: 2022,
    label: 'enhancing-brand-engagement',
    content: 'this-agency-transformed',
    own: '– Michael Peterson',
    departments: 'CMO, LuxeFit',
    thumnail: 'https://framerusercontent.com/images/oKJGsTy7hvpEkTQLbon9HUMesI.jpg',
  },
  {
    key: 'Tech Innovators',
    newspaper: 'Tech Innovators',
    year: 2023,
    label: 'building-a-digital',
    content: 'this-team-brought',
    own: '– Laura Stevens',
    departments: 'CEO, Tech Innovators',
    thumnail: 'https://framerusercontent.com/images/OBnJkre1fCL4md6rJTJ6YqbhdA8.jpg',
  },
]

const ourProjectsRight: OurProjectsInterface[] = [
  {
    key: 'GreenLeaf Organics',
    newspaper: 'GreenLeaf Organics',
    year: 2022,
    label: 'digital-strategy',
    content: 'working-with-this',
    own: '– David Thompson',
    departments: 'Marketing Manager, GreenLeaf Organics',
    thumnail: 'https://framerusercontent.com/images/5hJjohrojnDelnATi89ljS1q9w.jpg',
  },
  {
    key: 'Bright Horizons',
    newspaper: 'Bright Horizons',
    year: 2023,
    label: 'elevating-education',
    content: 'their-tailored-strategies',
    own: '– Jessica Williams',
    departments: 'Marketing Director, Bright Horizons',
    thumnail: 'https://framerusercontent.com/images/UK07liPWMrdpk9DyCAofAGQ8Tec.jpg',
  },
]

const latestBlogs: LatestBlogInterface[] = [
  {
    thumnail: imgBlog1,
    dateTime: 'Jun 25, 2024',
    label: 'the-role-of',
    content: 'this-iterative-process',
  },
  {
    thumnail: imgBlog2,
    dateTime: 'Jun 24, 2024',
    label: 'designing-for-user',
    content: 'methods-such-as',
  },
  {
    thumnail: imgBlog3,
    dateTime: 'Jun 23, 2024',
    label: 'the-future-of-product',
    content: 'designers-are',
  },
]

const advertingTop: { content: string }[] = [
  {
    content: 'strategic-branding',
  },
  {
    content: 'player-analytics',
  },
  {
    content: 'website-development-optimate',
  },
  {
    content: 'gambling-trends-update',
  },
]

const advertingBottom: { content: string }[] = [
  {
    content: 'earn-rewards',
  },
  {
    content: 'daily-content',
  },
  {
    content: 'share-on-social',
  },
  {
    content: 'search-play',
  },
]

const popularGenreProducts: PopularGenreProductsInterface[] = [
  {
    href: imgSport,
    nameProduct: 'Thể thao',
    typeProduct: 'Content Marketing',
    ratings: 4.9,
  },
  {
    href: imgBigWin,
    nameProduct: 'Live casino',
    typeProduct: 'Social Media Marketing',
    ratings: 4.9,
  },
  {
    href: imgBetGame,
    nameProduct: 'Quay số',
    typeProduct: 'Social Media Marketing',
    ratings: 4.9,
  },
  {
    href: imgFishBet,
    nameProduct: 'Bắn cá',
    typeProduct: 'Performance Marketing',
    ratings: 4.9,
  },
  {
    href: imgExplode,
    nameProduct: 'Nổ hũ',
    typeProduct: 'Content Marketing',
    ratings: 4.9,
  },
  {
    href: imgCardGame,
    nameProduct: 'Game bài',
    typeProduct: 'Community Building',
    ratings: 4.9,
  },
]

const reasons: ReasonInterface[] = [
  {
    thumbnail: imgBti,
    button: icBti,
  },
  {
    thumbnail: imgIbc,
    button: icIbc,
  },
  {
    thumbnail: imgK,
    button: icK,
  },
  {
    thumbnail: imgTechplay,
    button: icTechPlay,
  },
  {
    thumbnail: imgGsSport,
    button: icGsSport,
  },
]

export {
  customerAvatars,
  advertingTop,
  digitalMarketingProducts,
  ourProjectsLeft,
  ourProjectsRight,
  latestBlogs,
  advertingBottom,
  popularGenreProducts,
  reasons,
}
