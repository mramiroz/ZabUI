import { Button } from '@zabui/comps'
import React from 'react'

export default function Pricing({ price, text, features, backColor, btnText, borderColor, textColor, heigth, width}) {
  return (
    <div style={{backgroundColor: backColor, borderColor: borderColor, textColor: textColor}} 
        className={`max-w-sm p-8 mx-auto border rounded-lg shadow-lg w-${width} h-${heigth}`}>
      <h1 className="mb-4 text-center text-8xl">{price}</h1>
      <h2 className="mb-4 text-2xl text-center">{text}</h2>
      <ul className="m-10 space-y-2 ">
        {features && features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="mr-2">✓</span>
            <span className="">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="#" width="4" heigth="4" backColor={backColor} borderColor={borderColor}>
        {btnText}
      </Button>
    </div>
  )
}