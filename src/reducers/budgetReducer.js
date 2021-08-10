const initialState = {
  budget: 0,
}
export const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BUDGET":
      return { ...state, budget: action.amount }
    default:
      return state
  }
}
