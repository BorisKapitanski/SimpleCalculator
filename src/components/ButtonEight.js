

const ButtonEight = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>8</button>
    );
 };
 
 export default ButtonEight;