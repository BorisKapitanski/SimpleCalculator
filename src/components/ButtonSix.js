

const ButtonSix = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>6</button>
    );
 };
 
 export default ButtonSix;