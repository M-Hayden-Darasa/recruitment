import { reasons } from '@/helpers/data/home'
import { ReasonInterface } from '@/models/home'
import React from 'react'
import CardReason from './card-reason'

function Reason() {
  return (
    <section
      className="max-container padding-global mt-10 max-laptop:mt-8 max-large-mobile:mt-6 max-mobile:mt-4"
      style={{
        backgroundImage: "url('/images/common/img-reason.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="mt-5 grid grid-cols-5 gap-4 max-extralarge-laptop:grid-cols-4 max-large-mobile:grid-cols-2 max-extrasmall-mobile:grid-cols-1 max-large-tablet:grid-cols-3">
          {reasons?.map((product: ReasonInterface, index: number) => (
            <CardReason product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reason
