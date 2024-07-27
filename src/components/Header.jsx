import { MdLibraryAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchData, sortData } from "../redux/dataSlice";

const Header = () => {
   const dispatch = useDispatch()


   return (
      <div className="flex items-center px-20 py-5 text-xl justify-between bg-indigo-600 mb-8">
         <div className="text-3xl font-bold text-white">REACT<span className="text-yellow-400"> APP </span></div>
         <div className=" flex gap-3 items-center">
            <div>
               <select onChange={(e) => dispatch(sortData(e.target.value))} name="select" id="select" className="border rounded-md h-10 font-semibold ps-3">
                  <option value="">Sıralama</option>
                  <option value="asc">ARTAN PUAN</option>
                  <option value="desc">AZALAN PUAN</option>
               </select>
            </div>
            <div>
               <input onChange={(e)=> dispatch(searchData(e.target.value))} type="text" placeholder="ara" className="h-10 rounded-md indent-2" />
            </div>
            <div onClick={() => dispatch(modalFunc())} className="bg-indigo-800 w-11 h-11 rounded-full cursor-pointer text-white flex items-center justify-center hover:bg-indigo-900">
               <MdLibraryAdd size={24} />
            </div>
         </div>
      </div>
   );
};

export default Header;