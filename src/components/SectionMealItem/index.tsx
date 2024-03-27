import { TouchableOpacityProps } from 'react-native'
import { Container, DietIcon, Divider, Name, Time } from './styles'

type Props = TouchableOpacityProps & {
  time: string
  mealName: string
  onDiet: 'yes' | 'no'
}
export function SectionMealItem({ time, mealName, onDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Divider />
      <Name>
        {mealName.length > 23 ? `${mealName.slice(0, 23)}...` : mealName}
      </Name>
      <DietIcon type={onDiet} />
    </Container>
  )
}
