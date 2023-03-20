const ButtonSum = ({
    digit,
    extractNumber
 }) => {


    return (
    <button onClick={()=>extractNumber(digit)}>+</button>
    );
 };
 
 export default ButtonSum;