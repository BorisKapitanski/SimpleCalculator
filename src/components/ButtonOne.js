

const ButtonOne = ({
   digit,
   extractNumber
}) => {
   
   return (
   <button onClick={()=>extractNumber(digit)}>1</button>
   );
};

export default ButtonOne;

