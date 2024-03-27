import { TouchableOpacityProps } from 'react-native'

import { Container, Title, FilterStyleProps, Icon } from './styles'

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon isActive={isActive} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
