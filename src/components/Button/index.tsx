import { TouchableOpacityProps } from 'react-native'
import { AddIcon, Container, DeleteIcon, EditIcon, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: 'add' | 'edit' | 'delete'
  title: string
}

export function Button({ type, title, ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      {type === 'add' && <AddIcon />}
      {type === 'edit' && <EditIcon />}
      {type === 'delete' && <DeleteIcon />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
