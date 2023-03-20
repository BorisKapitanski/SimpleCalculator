

const ButtonTwo = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>2</button>
    );
 };
 
 export default ButtonTwo;