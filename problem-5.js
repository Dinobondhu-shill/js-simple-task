function monthlySavings(arr, livingCost) {
  if(!Array.isArray || typeof livingCost !== 'number'){
    return "invalid input";
  }
  let incomeWithoutTax = 0;
  let incomeWithTax = 0;
  for (const income of arr) {
    if (income >= 3000) {
      incomeWithTax += income - income * 20 / 100;
    } else if (income < 3000) {
      incomeWithoutTax += income;
    }
  }
  const totalIncome = incomeWithoutTax + incomeWithTax;
  const savings = totalIncome - livingCost;
  if (savings > 0) {
    return savings;
  }
   else {
    return "Earn More";
  }
}