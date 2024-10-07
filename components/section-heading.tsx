import React from 'react'

type SectionHedingProps = {
    children: React.ReactNode
}

export default function SectionHeading({
    children }: SectionHedingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8'>{children}</h2>
  )
}
