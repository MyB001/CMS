import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LiaWarehouseSolid } from "react-icons/lia";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import { IoExitOutline } from "react-icons/io5";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Products() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState()
  const [userID, setUserID] = useState();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [img, setImg] = useState("");
  const [popularity, setPopularity] = useState("");
  const [sale, setSale] = useState("");
  const [colors, setColors] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const submitProductByNewInfos = (event) => {
    event.preventDefault();

    let ProductByNewInfos = {
      title,
      price,
      count,
      img,
      popularity,
      sale,
      colors,
    };

    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProductByNewInfos),
    })
      .then((res) => {
        res.json()
        submittedEditModal()
      })
      .catch(err => console.log('eRRoR', err))
  };

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => {
        setAllProducts(products);
      })
      .catch((err) => console.log("this is eRRoR : ", err));
  };

  const canceledDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const deleteProduct = () => {
    fetch(`http://localhost:8000/api/products/${userID}`, {
      method: "DELETE",
    })
      .then((res) => {
        getAllProducts();
        setShowDeleteModal(false);
      })
      .catch((err) => console.log("eRRoR", err));
  };

  const canceledEditModal = () => {
    setShowEditModal(false);
  };

  const submittedEditModal = () => {
    getAllProducts();
    setShowEditModal(false);
  };

  // const [currentPage, setCurrentPage] = useState(1);

  // let rowCount = 10;
  // let endIndex = rowCount * currentPage;
  // let startIndex = endIndex - rowCount;
  // let allPage = Math.ceil(Datas.length / rowCount);
  // let remainData = Datas.slice(startIndex, endIndex);

  // const nextPage = () => {
  //   if (currentPage < allPage) {
  //     setCurrentPage(currentPage + 1);
  //     document.body.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const previousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     document.body.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div>
      <p className="my-4 text-2xl font-bold text-blue-600">محصولات</p>
      <hr />
      {allProducts.length === 0 ? (
        <div className="flex flex-col gap-2 justify-center items-center h-[calc(100vh-195px)]">
          <LiaWarehouseSolid className="text-blue-600 text-9xl" />
          <p className="text-blue-600">محصولی در انبار موجود نیست</p>
        </div>
      ) : (
        <table className="w-full text-right mt-8">
          <thead>
            <tr className="grid grid-cols-5">
              <th className="border-b-[1px] border-sky-400 px-2">عکس</th>
              <th className="border-b-[1px] border-sky-400 px-2">نام</th>
              <th className="border-b-[1px] border-sky-400 px-2">قیمت</th>
              <th className="border-b-[1px] border-sky-400 px-2">موجودی</th>
              <th className="border-b-[1px] border-sky-400 px-2">تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="grid grid-cols-5">
                <td className="p-2 flex items-center">
                  <img
                    src={product.img}
                    alt="img"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </td>
                <td className="p-2 flex items-center">{product.title}</td>
                <td className="p-2 flex items-center">{product.price}</td>
                <td className="p-2 flex items-center">{product.count}</td>
                <td className="p-2 flex items-center gap-4">
                  <button
                    type="button"
                    className="bg-blue-600 px-2 border-blue-600 border-[1px] text-white active:bg-white active:text-blue-600 rounded-md"
                    onClick={() => {
                      setProductID(product.id);
                      setTitle(product.title);
                      setPrice(product.price);
                      setCount(product.count);
                      setImg(product.img);
                      setPopularity(product.popularity);
                      setSale(product.sale);
                      setColors(product.colors);
                      setShowEditModal(true);
                    }}
                  >
                    ویرایش
                  </button>
                  {/* <button
                    type="button"
                    className="bg-blue-600 px-2 border-blue-600 border-[1px] text-white active:bg-white active:text-blue-600 rounded-md"
                  >
                    جزئیات
                  </button> */}
                  <FaTrash
                    className="text-[#ff0000] cursor-pointer"
                    onClick={() => {
                      setUserID(product.id);
                      setShowDeleteModal(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <EditModal>
        <div
          className={`${
            showEditModal ? "" : "invisible opacity-0"
          } w-full h-screen fixed top-0 left-0 bg-[#a99c9c84] backdrop-blur-sm z-50 flex justify-center items-center transition-all duration-300`}
        >
          <div className="bg-white rounded-md p-8 shadow-md shadow-blue-600">
            <div className="flex justify-between items-center">
              <p className="my-4 text-2xl font-bold text-blue-600">
                ایجاد محصول جدید
              </p>
              <IoExitOutline
                className="rotate-180 text-2xl text-red-600 cursor-pointer"
                onClick={() => canceledEditModal()}
              />
            </div>
            <hr />
            <form
              className="space-y-8 m-8"
              onSubmit={(event) => submitProductByNewInfos(event)}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="">نام محصول</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">قیمت</p>
                  <input
                    type="text"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">موجودی انبار</p>
                  <input
                    type="text"
                    value={count}
                    onChange={(event) => setCount(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">آدرس عکس</p>
                  <input
                    type="text"
                    value={img}
                    onChange={(event) => setImg(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">میزان محبوبیت</p>
                  <input
                    type="text"
                    value={popularity}
                    onChange={(event) => setPopularity(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">میزان فروش</p>
                  <input
                    type="text"
                    value={sale}
                    onChange={(event) => setSale(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
                <div className="space-y-2">
                  <p className="">تعداد رنگ</p>
                  <input
                    type="text"
                    value={colors}
                    onChange={(event) => setColors(event.target.value)}
                    className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
                  />
                </div>
              </div>
              <button className="bg-blue-600 text-white border-[1px] border-blue-600 active:bg-white active:text-blue-600 px-6 rounded-md">
                ثبت
              </button>
            </form>
          </div>
        </div>
      </EditModal>
      <DeleteModal
        showModal={showDeleteModal}
        canceledModal={canceledDeleteModal}
        deleteCase={deleteProduct}
      />
      {/* <div className="mt-8 flex justify-center items-center gap-4">
        <button
          type="button"
          className="bg-sky-400 border-[1px] border-sky-400 text-white text-xl rounded-full active:bg-white active:text-sky-400"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <p>
          {currentPage} از {allPage}
        </p>
        <button
          type="button"
          className="bg-sky-400 border-[1px] border-sky-400 text-white text-xl rounded-full active:bg-white active:text-sky-400"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div> */}
    </div>
  );
}
