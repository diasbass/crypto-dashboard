'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  alt: string
}

export default function ImageWithFallback({ src, alt }: Props) {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? '/fallback.jpg' : src}
      alt={alt}
      fill
      onError={() => setError(true)}
      className="object-cover group-hover:scale-105 transition-transform duration-200 rounded-t-lg"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  )
}
