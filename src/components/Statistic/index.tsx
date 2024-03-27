import { Highlight } from '../Highlight'
import { Container } from './styles'

type Props = {
  title: string
  subtitle: string
  type?: 'positive' | 'negative'
  size: 'S' | 'M' | 'G'
}
export function Statistic({ title, subtitle, type = undefined, size }: Props) {
  return (
    <Container type={type}>
      <Highlight title={title} subtitle={subtitle} size={size} />
    </Container>
  )
}
