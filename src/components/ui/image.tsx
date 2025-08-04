import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'

import imgDefault from '@/public/images/common/image-default.webp'

interface imageInterfaceProps {
  src: string | StaticImageData
  alt?: string
  width?: number
  height?: number
  className?: string
}

function ImageCommon({ src, alt, width, height, className }: imageInterfaceProps) {
  return (
    <Image
      src={src}
      alt={alt ? alt : 'image'}
      width={width || 0}
      height={height || 0}
      className={cn('object-cover', className)}
      priority
      onError={(e) => (e.currentTarget.src = `${imgDefault}`)}
    />
  )
}

export default ImageCommon
