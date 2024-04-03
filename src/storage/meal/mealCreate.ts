import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@/utils/AppError'

import { MEAL_COLLECTION } from '@/storage/storageConfig'
import { mealsGetAll } from '@/storage/meal/mealsGetAll'

import { MealStorageDTO } from '@/storage/meal/MealStorageDTO'

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()
    const mealAlreadyExists = storedMeals.filter(
      (meal) =>
        Number(meal.date) === Number(newMeal.date) &&
        meal.name === newMeal.name.trim()
    )

    if (mealAlreadyExists.length > 0) {
      throw new AppError(
        'Já existe um prato cadastrado com esse nome na mesma data e horário.'
      )
    }

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, newMeal])
    )
  } catch (error) {
    throw error
  }
}
