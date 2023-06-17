import { Card } from './StyledComponents'

export default function ColumCard ({ Icon, title, text, to, bgColor }) {
  return (
    <Card bgcolor={bgColor}>
      <Icon />
      <h1>{title}</h1>
      <p>{text}</p>
      <a href={to}>Learn More</a>
    </Card>
  )
}
