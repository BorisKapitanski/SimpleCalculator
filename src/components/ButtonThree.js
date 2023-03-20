

const ButtonThree = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>3</button>
    );
 };
 
 export default ButtonThree;