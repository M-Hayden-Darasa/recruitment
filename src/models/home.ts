export interface AvatarCustomerInterface {
  href: string
}

export interface DigitalProductsInterface {
  href: string
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
  thumnail: string
  dateTime: string
  label: string
  content: string
}
