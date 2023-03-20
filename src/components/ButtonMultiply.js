const ButtonMultiply = ({
    digit,
    extractNumber
 }) => {


    return (
    <button onClick={()=>extractNumber(digit)}>*</button>
    );
 };
 
 export default ButtonMultiply;