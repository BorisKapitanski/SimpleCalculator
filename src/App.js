import ButtonOne from "./components/ButtonOne";
import './App.css';
import calculate from "./utils/calculate";
import ButtonTwo from "./components/ButtonTwo";
import ButtonThree from "./components/ButtonThree";
import ButtonClear from "./components/ButtonClear";
import ButtonFour from "./components/ButtonFour";
import ButtonFive from "./components/ButtonFive";
import ButtonSix from "./components/ButtonSix";
import ButtonDivider from "./components/ButtonDivider";
import ButtonSeven from "./components/ButtonSeven";
import ButtonEight from "./components/ButtonEight";
import ButtonNine from "./components/ButtonNine";
import ButtonMultiply from "./components/ButtonMultiply";
import ButtonProcentage from "./components/ButtonProcentage";
import ButtonSubtract from "./components/ButtonSubtract";
import ButtonZero from "./components/ButtonZero";
import ButtonPoint from "./components/ButtonPoint";
import ButtonRezult from "./components/ButtonRezult";
import ButtonOnOff from "./components/ButtonOnOff";
import ButtonSum from "./components/ButtonSum";
import Rezult from "./components/Rezult";
import { useState } from "react";
function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  function extractNumber(digit) {
    if (digit === "*" || digit === "/" || digit === "+" || digit === "-" || digit === "=") {
      if (digit === "=") {
        let finalResult;
        console.log(firstNumber)
        console.log(action);
        console.log(secondNumber);
        if (secondNumber === "") {
          finalResult = calculate(Number(firstNumber), action, secondNumber);
          setResult(() => finalResult);
          setFirstNumber(finalResult);
          setSecondNumber("");
        } else {
          finalResult = calculate(Number(firstNumber), action, Number(secondNumber));
          setResult(() => finalResult);
          setFirstNumber(finalResult);
          setSecondNumber("");
        }
      } else {
        setAction(digit);
        setResult("");

      }
      return;
    }
    if (action) {
      if (secondNumber.includes(".") && digit === ".") {
        return;
      }
      if (digit === "%") {
        const newSecondNumber = Number(secondNumber) / 100;
        console.log(newSecondNumber);
        setSecondNumber(newSecondNumber);
      }else{
        setSecondNumber(() => secondNumber + digit);
        setResult(() => result + digit);
      }
    } else {
      if (firstNumber.includes(".") && digit === ".") {
        return;
      }
      if (digit === "%") {
        const newFirstNumber = Number(firstNumber) / 100;
        setFirstNumber(newFirstNumber);
        setResult(newFirstNumber);
      } else {
        setFirstNumber(() => firstNumber + digit);
        setResult(() => result + digit);
      }

    }
  }

  function onErrase() {
    setFirstNumber("");
    setSecondNumber("");
    setAction("");
    setResult("");
  }




  return (
    <section>
      <h1>Calculator</h1>
      <section className="Result">

        <Rezult result={result} />

      </section>

      <section className="Options">

        <ButtonOnOff />

        <ButtonProcentage digit={"%"} extractNumber={extractNumber} />

        <ButtonClear onErrase={onErrase} />


      </section>

      <section className="FirsLine">
        <ButtonOne digit={1} extractNumber={extractNumber} />

        <ButtonTwo digit={2} extractNumber={extractNumber} />

        <ButtonThree digit={3} extractNumber={extractNumber} />

        <ButtonDivider digit={"/"} extractNumber={extractNumber} />
      </section>

      <section className="SecondLine">

        <ButtonFour digit={4} extractNumber={extractNumber} />

        <ButtonFive digit={5} extractNumber={extractNumber} />

        <ButtonSix digit={6} extractNumber={extractNumber} />

        <ButtonMultiply digit={"*"} extractNumber={extractNumber} />

      </section>

      <section className="ThirdLine">

        <ButtonSeven digit={7} extractNumber={extractNumber} />

        <ButtonEight digit={8} extractNumber={extractNumber} />

        <ButtonNine digit={9} extractNumber={extractNumber} />

        <ButtonSubtract digit={"-"} extractNumber={extractNumber} />

      </section>

      <section className="FourthLine">

        <ButtonZero digit={0} extractNumber={extractNumber} />

        <ButtonPoint digit={"."} extractNumber={extractNumber} />

        <ButtonRezult digit={"="} extractNumber={extractNumber} />

        <ButtonSum digit={"+"} extractNumber={extractNumber} />

      </section>

    </section>
  )

}

export default App;
