const ButtonDivider = ({
    digit,
    extractNumber
 }) => {


    return (
    <button onClick={()=>extractNumber(digit)}>/</button>
    );
 };
 
 export default ButtonDivider;