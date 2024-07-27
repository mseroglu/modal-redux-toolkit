import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEffect, useState } from "react"
import { addData, editData } from "../redux/dataSlice"
import { modalFunc, setEditData } from "../redux/modalSlice";


const Products = () => {
  const { modal, willEditData } = useSelector(state => state.modalSlice)
  const { data, keyword } = useSelector(state => state.dataSlice)
  const filteredData = data?.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))

  const dispatch = useDispatch()

  const [productInfo, setProductInfo] = useState({ id: "", name: "", point: "", url: "" })

  useEffect(() => {
    willEditData && setProductInfo(willEditData)
  }, [willEditData])


  const onChangeFonk = (e, type) => {
    if (type === "file") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }

  const createData = () => {
    dispatch(addData({ ...productInfo, id: data.length + 1 }))
    dispatch(modalFunc())
  }

  const updateData = () => {
    dispatch(editData(productInfo))
    dispatch(modalFunc())
    dispatch(setEditData(null))
  }

  const contentModal = (
    <>
      <Input
        label="Çocuk Adı"
        name={"name"}
        id={"name"}
        onChangeFonk={onChangeFonk}
        defaultValue={willEditData?.name} />
      <Input
        label="Şekerlik Puanı"
        type="number"
        name={"point"}
        id={"point"}
        onChangeFonk={onChangeFonk}
        defaultValue={willEditData?.point} />
      <Input
        label="Resim seç"
        type="file"
        name={"url"}
        id={"url"}
        accept={"image/jpeg, image/png"}
        onChangeFonk={onChangeFonk} />
      <Button btnText={willEditData ? "Güncelle" : "Oluştur"} onClick={willEditData ? updateData : createData} />
    </>
  )
  return (
    <div>
      <div className="flex flex-wrap p-5 gap-5 justify-center">
        {
          filteredData?.map((product, i) => (<ProductCard key={i} product={product} />))
        }
      </div>

      {
        modal && <Modal title={willEditData ? "Şirin Güncelle" : "Şirin Oluştur"} content={contentModal} />
      }
    </div>
  );
};

export default Products;