export type MealStorageDTO = {
  id: string
  name: string
  description: string
  date: Date
  onDiet: 'positive' | 'negative'
}
