import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./purchase.css"
import { addItemAction, removeItemAction } from "../actions/purchaseActions"
const Purchase = () => {
  const dispatch = useDispatch()
  const budget = useSelector((state) => state.budget.budget)
  const purchaseList = useSelector((state) => state.purchase.purchaseList)
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState(0)

  const handleAddNewItem = () => {
    let totalPurchase = purchaseList.map((item) => item.amount).reduce((prev, curr) => prev + curr, 0)
    if (totalPurchase + parseInt(amount) > budget) {
      alert("Exceeding budget limit. This item cannot be added.")
      return
    }
    dispatch(addItemAction({ item: item, amount: parseInt(amount) }))
    console.log("list", purchaseList)
    setTotal(totalPurchase + parseInt(amount))
  }
  const handleRemoveItem = (i, amount) => {
    setTotal(total - parseInt(amount))
    dispatch(removeItemAction(i))
  }

  return (
    <div className="purchaseContainer">
      {purchaseList.length > 0 &&
        purchaseList.map((item, index) => {
          return (
            <div key={index} className="purchaseItem">
              <div>{item.item}</div>
              <div>{item.amount}</div>
              <button onClick={() => handleRemoveItem(index, item.amount)}>Remove</button>
            </div>
          )
        })}
      <div>Total Purchase Value= {total}</div>
      <div className="addItem">
        <input value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item Name" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={handleAddNewItem}>ADD</button>
      </div>
    </div>
  )
}
export default Purchase
