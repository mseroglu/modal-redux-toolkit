
const Button = ({ onClick, btnText }) => {

   return (
      <div className="mt-10 text-center">
         <button 
         className="bg-indigo-600 text-white hover:bg-indigo-700 text-2xl rounded-md px-5 py-2" 
         onClick={onClick}>
            {btnText}
         </button>
      </div>
   );
};

export default Button;