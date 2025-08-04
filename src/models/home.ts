import { StaticImageData } from 'next/image'

export interface AvatarCustomerInterface {
  href: string
}

export interface DigitalProductsInterface {
  href: string | StaticImageData
  nameProduct: string
  typeProduct: string
}

export interface OurServicesInterface {
  value: string
  label: string
  content: string
}

export interface OurProjectsInterface {
  key: string
  newspaper: string
  year: number
  label: string
  content: string
  own: string
  departments: string
  thumnail: string
}

export interface LatestBlogInterface {
  thumnail: string | StaticImageData
  dateTime: string
  label: string
  content: string
}

export interface PopularGenreProductsInterface {
  href: string | StaticImageData
  nameProduct: string
  typeProduct: string
  ratings?: number
  operatingSystem?: string
}

export interface ReasonInterface {
  thumbnail: string | StaticImageData
  button: string | StaticImageData
}
