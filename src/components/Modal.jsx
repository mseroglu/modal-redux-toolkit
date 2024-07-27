import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc, setEditData } from "../redux/modalSlice";



const Modal = ({ title, content }) => {
   const dispatch = useDispatch()

   return (
      <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center ">
         <div className=" bg-zinc-100 shadow-lg rounded-md p-8 relative">
            <div className="bg-zinc-500 rounded-lg px-5 py-2 mb-10 mx-5">
               
               <div onClick={() => {
                  dispatch(modalFunc());
                  dispatch(setEditData(null))
               }}
                  className="absolute right-0 top-0 text-3xl cursor-pointer hover:bg-zinc-600 hover:text-white active:bg-zinc-800 rounded-full">
                  <IoMdCloseCircleOutline />
               </div>
               <div className="text-2xl text-white text-center">
                  {title}
               </div>

            </div>

            <div>
               {content}
            </div>

         </div>
      </div>
   );
};

export default Modal;