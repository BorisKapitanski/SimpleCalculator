const ButtonSubtract = ({
    digit,
    extractNumber
 }) => {


    return (
    <button onClick={()=>extractNumber(digit)}>-</button>
    );
 };
 
 export default ButtonSubtract;