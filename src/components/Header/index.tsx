import { Container, ImageBlock, Logo, ProfileImg } from './styles'

export function Header() {
  return (
    <Container>
      <ImageBlock>
        <Logo />
        <ProfileImg />
      </ImageBlock>
    </Container>
  )
}
