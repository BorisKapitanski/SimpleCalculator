

const ButtonSeven = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>7</button>
    );
 };
 
 export default ButtonSeven;