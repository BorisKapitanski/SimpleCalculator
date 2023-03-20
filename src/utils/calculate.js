
export default function calculate(numberOne, todo, numberTwo) {
    let total;
    if (!numberTwo) {
      numberTwo = numberOne
    }
    switch (todo) {
      case "+": total = numberOne + numberTwo;
        break;
      case "-": total = numberOne - numberTwo;
        break;
      case "*": total = numberOne * numberTwo;
        break;
      case "/": total = numberOne / numberTwo;
        break;
    }
    return total
  }