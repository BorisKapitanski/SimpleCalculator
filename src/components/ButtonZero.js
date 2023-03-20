

const ButtonZero = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>0</button>
    );
 };
 
 export default ButtonZero;