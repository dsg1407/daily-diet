export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: {
        totalMeals: number
        positiveMeals: number
        sequence: number
        positiveIndex: number
      }
      mealDescription: {
        mealName: string
      }
      new: undefined
      edit: {
        meal: string
      }
      feedback: {
        type: 'positive' | 'negative'
      }
    }
  }
}
