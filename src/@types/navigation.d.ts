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
        id: string
      }
      new: {
        mealRoute: 'add' | 'edit'
        id?: string
      }

      feedback: {
        type: 'positive' | 'negative'
      }
    }
  }
}
