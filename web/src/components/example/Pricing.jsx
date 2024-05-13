import { Button } from '@zabui/comps'

const colorPalette = {
  blue: {
    backColor: '#1E40AF',
    borderColor: 'white',
    textColor: '#1E40AF'
  },
  green: {
    backColor: '#047857',
    borderColor: '#047857',
    textColor: '#047857'
  },
  red: {
    backColor: '#DC2626',
    borderColor: '#DC2626',
    textColor: '#DC2626'
  },
  black: {
    backColor: '#262626',
    borderColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  white: {
    backColor: '#F9FAFB',
    borderColor: '#F9FAFB',
    textColor: '#F9FAFB'
  }
}
export default function Pricing({ price, text, features, color}) {
  const colorData = colorPalette[color];
  const { backColor, borderColor, textColor } = colorData;
  return (
    <div style={{backgroundColor: backColor, borderColor: borderColor, textColor: textColor}} 
        className="max-w-sm p-8 mx-auto border rounded-lg shadow-lg">
      <h1 className="mb-4 text-center text-8xl">{price}</h1>
      <h2 className="mb-4 text-2xl text-center">{text}</h2>
      <ul className="m-10 space-y-2 ">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="mr-2">✓</span>
            <span className="">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="#" width="4" heigth="4" backColor={backColor} borderColor={borderColor}>
        {text}
      </Button>
    </div>
  )
}