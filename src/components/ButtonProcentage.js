const ButtonProcentage = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=> extractNumber(digit)}>%</button>
    );
 };
 
 export default ButtonProcentage;