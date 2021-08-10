const initialState = {
  purchaseList: [],
}
export const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let purchaseList = state.purchaseList
      purchaseList.push(action.purchaseItem)
      return { ...state, purchaseList: [...purchaseList] }
    case "REMOVE_ITEM":
      let purchaseListItems = state.purchaseList
      purchaseListItems.splice(action.itemNo, 1)
      return { ...state, purchaseList: [...purchaseListItems] }
    default:
      return state
  }
}
