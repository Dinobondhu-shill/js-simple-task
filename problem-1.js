// Create a function about calculation all income & cost of baker vai's zoo.
// per ticket price = 120tk, gateman cost= 800tk, and 8 stuff's lunch cost =8*50tk.
// it will take a positive input as number .
// at last it will return how much money is the savings for baker vai. 
// if given input has negative number it will be return error ..

function calculateMoney(number) {
  const ticket = 120;
  const gateMan = 500;
  const stuffNo = 8;
  const lunchCost = 50;
  if (number < 0) {
    return "Ticket Numbers can't be negative!";
  } else {
    const income = number * ticket;
    const cost = gateMan + (stuffNo * lunchCost);
    const savings = income - cost;
    return savings;
  }
}