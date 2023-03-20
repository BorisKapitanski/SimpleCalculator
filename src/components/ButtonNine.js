

const ButtonNine = ({
    digit,
    extractNumber
}) => {


    return (
    <button onClick={()=>extractNumber(digit)}>9</button>
    );
 };
 
 export default ButtonNine;