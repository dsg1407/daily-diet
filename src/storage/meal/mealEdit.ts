import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@/storage/storageConfig'

import { mealsGetAll } from '@/storage/meal/mealsGetAll'

import { MealStorageDTO } from '@/storage/meal/MealStorageDTO'

export async function mealEdit(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()
    const meals = storedMeals.filter((meal) => meal.id !== newMeal.id)

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...meals, newMeal])
    )
  } catch (error) {
    throw error
  }
}
