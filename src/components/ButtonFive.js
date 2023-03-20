
const ButtonFive = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>5</button>
    );
 };
 
 export default ButtonFive;