import React, { useState } from "react";

export default function NewUser() {
  const [firsname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [buy, setBuy] = useState("");

  const addUser = (event) => {
    event.preventDefault();

    const newUser = {
      firsname,
      lastname,
      username,
      password,
      phone,
      city,
      email,
      address,
      score,
      buy,
    };

    fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => clearInputs())
      .catch(err => console.log('post user eRRoR', err))
  };

  const clearInputs = () => {
    setFirstname("");
    setLastname("");
    setUsername("");
    setPassword("");
    setPhone("");
    setCity("");
    setEmail("");
    setAddress("");
    setScore("");
    setBuy("");
  };

  return (
    <div>
      <p className="my-4 text-2xl font-bold text-blue-600">ایجاد کاربر جدید</p>
      <hr />
      <form className="space-y-8 m-8" onSubmit={(event) => addUser(event)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="">نام</p>
            <input
              type="text"
              value={firsname}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">نام خانوادگی</p>
            <input
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">نام کاربری</p>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">رمز عبور</p>
            <input
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">شماره همراه</p>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">شهر محل زندگی</p>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">ایمیل</p>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">آدرس</p>
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">امتیاز کاربر</p>
            <input
              type="text"
              value={score}
              onChange={(event) => setScore(event.target.value)}
              className="w-full outline-none border-[1px] border-sky-400 rounded-md p-1"
            />
          </div>
          <div className="space-y-2">
            <p className="">میزان خرید</p>
            <input
              type="text"
              value={buy}
              onChange={(event) => setBuy(event.target.value)}
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
