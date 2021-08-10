export const changeBudgetAction = (amount) => {
  return { type: "CHANGE_BUDGET", amount: parseInt(amount) }
}
