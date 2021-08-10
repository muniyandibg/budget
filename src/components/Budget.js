import "./budget.css"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeBudgetAction } from "../actions/budgetActions"
const Budget = () => {
  const dispatch = useDispatch()
  const budget = useSelector((state) => state.budget.budget)
  const [changeBudget, setChangeBudget] = useState(false)
  const [amount, setAmount] = useState("")

  const handleBudgetChange = () => {
    dispatch(changeBudgetAction(amount))
    setAmount("")
    setChangeBudget(false)
  }

  return (
    <div className="budgetContainer">
      {changeBudget ? (
        <>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter New Budget" />
          <button onClick={() => handleBudgetChange()}>Save</button>
          <button onClick={() => setChangeBudget(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div>React-Redux App</div>
          <div>Budget : {budget}</div>

          <button onClick={() => setChangeBudget(true)}>Change</button>
        </>
      )}
    </div>
  )
}
export default Budget
