import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { delData } from "../redux/dataSlice";
import { modalFunc, setEditData } from "../redux/modalSlice";
import { FaBirthdayCake } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className="border bg-neutral-200 rounded-xl w-80 h-80 p-5 relative overflow-hidden">
      <img className="h-[75%] absolute top-0 left-0 w-full object-cover hover:scale-105 transition" src={product.url} alt="img" />
      <div className="bg-indigo-600 absolute bottom-0 left-0 w-full p-2 text-white h-[25%]">
        <div className="flex justify-between items-center">
          <div >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-2xl font-bold text-yellow-400"> Puan: {product.point}</p>
          </div>
          <div className="text-[50px]">
            <FaBirthdayCake />
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-2 right-2 cursor-pointer hover:scale-150 transition rounded-full px-1 bg-white opacity-50">
        <BsThreeDots />
      </div>

      {
        isMenuOpen && (
          <div onMouseLeave={() => setIsMenuOpen(false)} className="absolute top-8 right-1 bg-slate-200 opacity-55 ">
            <div
              onClick={() => {
                dispatch(modalFunc());
                dispatch(setEditData(product))
              }} //! navigate("/?edit="+product.id)
              className="text-3xl py-2 px-4 hover:bg-slate-500 cursor-pointer transition "><CiEdit /></div>
            <div
              onClick={() => dispatch(delData(product.id))}
              className="text-3xl py-2 px-4 hover:bg-slate-500 cursor-pointer transition "><RiDeleteBin5Line /></div>
          </div>
        )
      }

    </div>
  );
};

export default ProductCard;