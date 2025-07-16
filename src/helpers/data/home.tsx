import {
  AvatarCustomerInterface,
  DigitalProductsInterface,
  LatestBlogInterface,
  OurProjectsInterface,
  OurServicesInterface,
} from '@/models/home'

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
    href: 'https://framerusercontent.com/images/9OieI1qQRIyO83s2W0BSEwnWs.jpg',
    nameProduct: 'Travelista',
    typeProduct: 'Content Marketing',
  },
  {
    href: 'https://framerusercontent.com/images/MMNjB4wFJqQ9tvVhmSWq2nVAtlU.jpg',
    nameProduct: 'FitLife Studios',
    typeProduct: 'Social Media Marketing',
  },
  {
    href: 'https://framerusercontent.com/images/VFwKdqS1n9i7HwO9yhU6Payuzk.jpg',
    nameProduct: 'FreshNest',
    typeProduct: 'Social Media Marketing',
  },
  {
    href: 'https://framerusercontent.com/images/qwTKRxrhuJ0Jp7FcgutnbCd1Ys.jpg',
    nameProduct: 'EcoSolutions',
    typeProduct: 'Content Marketing',
  },
]

export const OurServices: OurServicesInterface[] = [
  {
    value: 'services-1',
    label: 'branding-and-strategy',
    content: 'our-branding',
  },
  {
    value: 'services-2',
    label: 'analytics-and-reporting',
    content: 'our-analytics',
  },
  {
    value: 'services-3',
    label: 'website-development',
    content: 'our-website',
  },
  {
    value: 'services-4',
    label: 'email-marketing',
    content: 'our-email',
  },
  {
    value: 'services-5',
    label: 'pay-per',
    content: 'our-pay-per-click',
  },
  {
    value: 'services-6',
    label: 'content-marketing',
    content: 'our-content',
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
    thumnail:
      'https://framerusercontent.com/images/t7ZGNtBnjEJRJd8eZF4kCw0jw.jpg?scale-down-to=1024',
    dateTime: 'Jun 25, 2024',
    label: 'the-role-of',
    content: 'this-iterative-process',
  },
  {
    thumnail:
      'https://framerusercontent.com/images/LUGHUqtnMC2cxYt3G1zRx8s6zh4.jpg?scale-down-to=2048',
    dateTime: 'Jun 24, 2024',
    label: 'designing-for-user',
    content: 'methods-such-as',
  },
  {
    thumnail:
      'https://framerusercontent.com/images/se6L5EeDqcgbbFHN21I1r0Zwxg.jpg?scale-down-to=1024',
    dateTime: 'Jun 23, 2024',
    label: 'the-future-of-product',
    content: 'designers-are',
  },
]

const advertingTop: { content: string }[] = [
  {
    content: 'Branding and Strategy',
  },
  {
    content: 'Analytics and Reporting',
  },
  {
    content: 'Website Development',
  },
  {
    content: 'Branding and Strategy',
  },
]

const advertingBottom: { content: string }[] = [
  {
    content: 'Pay-Per-Click Advertising',
  },
  {
    content: 'Content Marketing',
  },
  {
    content: 'Social Media Marketing',
  },
  {
    content: 'Search Engine Optimization',
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
}
