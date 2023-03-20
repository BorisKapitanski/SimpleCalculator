

const ButtonPoint = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=> extractNumber(digit)}>.</button>
    );
 };
 
 export default ButtonPoint;