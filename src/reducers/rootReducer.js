import { combineReducers } from "redux"
import { budgetReducer } from "./budgetReducer"
import { purchaseReducer } from "./purchaseReducer"

export const rootReducer = combineReducers({
  budget: budgetReducer,
  purchase: purchaseReducer,
})
