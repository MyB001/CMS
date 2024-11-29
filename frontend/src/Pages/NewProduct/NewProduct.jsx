import React, { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [img, setImg] = useState("");
  const [popularity, setPopularity] = useState("");
  const [sale, setSale] = useState("");
  const [colors, setColors] = useState("");

  const addProduct = (event) => {
    event.preventDefault()

    let newProduct = {
      title,
      price,
      count,
      img,
      popularity,
      sale,
      colors
    }

    fetch('http://localhost:8000/api/products/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
    .then(res => {
      res.json()
      clearDataInput()
    })
    .catch(err => console.log('eRRoR', err))
  };

  const clearDataInput = () => {
    setTitle('');
    setPrice('');
    setCount('');
    setImg('');
    setPopularity('');
    setSale('');
    setColors('');
  };

  return (
    <div>
      <p className="my-4 text-2xl font-bold text-blue-600">ایجاد محصول جدید</p>
      <hr />
      <form className="space-y-8 m-8" onSubmit={addProduct}>
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
  );
}
