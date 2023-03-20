

const ButtonFour = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>4</button>
    );
 };
 
 export default ButtonFour;