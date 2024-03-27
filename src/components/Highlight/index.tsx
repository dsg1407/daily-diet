import { Container, Subtitle, Title } from './styles'

type Props = {
  title: string
  size: 'S' | 'M' | 'G'
  subtitle?: string
}
export function Highlight({ title, size, subtitle }: Props) {
  return (
    <Container>
      <Title size={size}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
