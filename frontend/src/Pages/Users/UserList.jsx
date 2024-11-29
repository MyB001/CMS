import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LiaWarehouseSolid } from "react-icons/lia";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import { IoExitOutline } from "react-icons/io5";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function UserList() {
  // start slider
  // const [currentPage, setCurrentPage] = useState(1)

  // let rowCount = 10
  // let endIndex = rowCount * currentPage
  // let startIndex = endIndex - rowCount
  // let allPage = Math.ceil(Datas.length / rowCount)
  // let remainData = Datas.slice(startIndex, endIndex)

  // const nextPage = () => {
  //   if(currentPage < allPage) {
  //     setCurrentPage(currentPage + 1)
  //     document.body.scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  // const previousPage = () => {
  //   if(currentPage > 1) {
  //     setCurrentPage(currentPage - 1)
  //     document.body.scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  const [allUsers, setAllUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userID, setUserID] = useState();

  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [buy, setBuy] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log("get users eRRoR", err));
  };

  const deleteUser = () => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => {
        getAllUsers();
        setShowDeleteModal(false);
      })
      .catch((err) => console.log("delete user eRRoR", err));
  };

  const submitUserByNewInfos = (event) => {
    event.preventDefault();

    const userByNewInfos = {
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

    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userByNewInfos),
    })
      .then(res => {
        getAllUsers()
        setShowEditModal(false)
      })
      .catch(err => console.log('put user eRRoR', err))
  };

  return (
    <div>
      <p className="my-4 text-2xl font-bold text-blue-600">کاربران</p>
      <hr />
      {allUsers.length ? (
        <table className="w-full text-right mt-8">
          <thead>
            <tr className="space-x-4">
              <th className="border-sky-400 px-2">شناسه</th>
              <th className="border-sky-400 px-2">نام کاربر</th>
              <th className="border-sky-400 px-2">ایمیل</th>
              <th className="border-sky-400 px-2">شماره موبایل</th>
              <th className="border-sky-400 px-2">وضعیت</th>
              <th className="border-sky-400 px-2">تراکنش</th>
              <th className="border-sky-400 px-2">تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td className="border-t-[1px] border-sky-400 p-2">{user.id}</td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {user.username}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {user.email}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {user.phone}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {user.score}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {user.buy}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2 flex items-center gap-4">
                  <button
                    type="button"
                    className="bg-blue-600 px-2 border-blue-600 border-[1px] text-white active:bg-white active:text-blue-600 rounded-md"
                    onClick={() => {
                      setShowEditModal(true);
                      setUserID(user.id);
                      setFirsname(user.firsname);
                      setLastname(user.lastname);
                      setUsername(user.username);
                      setPassword(user.password);
                      setPhone(user.phone);
                      setCity(user.city);
                      setEmail(user.email);
                      setAddress(user.address);
                      setScore(user.score);
                      setBuy(user.buy);
                    }}
                  >
                    ویرایش
                  </button>
                  <FaTrash
                    className="text-[#ff0000] cursor-pointer"
                    onClick={() => {
                      setUserID(user.id);
                      setShowDeleteModal(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center h-[calc(100vh-195px)]">
          <LiaWarehouseSolid className="text-blue-600 text-9xl" />
          <p className="text-blue-600">کاربری وجود ندارد</p>
        </div>
      )}
      {/* <div className='mt-8 flex justify-center items-center gap-4'>
        <button onClick={() => nextPage()} type="button" className='bg-sky-400 border-[1px] border-sky-400 text-white text-xl rounded-full active:bg-white active:text-sky-400'>
          <MdOutlineKeyboardArrowRight />
        </button>
        <p>{currentPage} از {allPage}</p>
        <button onClick={() => previousPage()} type="button" className='bg-sky-400 border-[1px] border-sky-400 text-white text-xl rounded-full active:bg-white active:text-sky-400'>
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div> */}
      <EditModal>
        <div
          className={`${
            showEditModal ? "" : "invisible opacity-0"
          } w-full h-screen fixed top-0 left-0 bg-[#a99c9c84] backdrop-blur-sm z-50 flex justify-center items-center transition-all duration-300`}
        >
          <div className="bg-white rounded-md p-8 shadow-md shadow-blue-600">
            <div className="flex justify-between items-center">
              <p className="my-4 text-2xl font-bold text-blue-600">
                افزودن کاربر جدید
              </p>
              <IoExitOutline
                className="rotate-180 text-2xl text-red-600 cursor-pointer"
                onClick={() => setShowEditModal(false)}
              />
            </div>
            <hr />
            <form
              className="space-y-8 m-8"
              onSubmit={(event) => submitUserByNewInfos(event)}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="">نام</p>
                  <input
                    type="text"
                    value={firsname}
                    onChange={(event) => setFirsname(event.target.value)}
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
                    type="text"
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
                  <p className="">امتیاز</p>
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
        </div>
      </EditModal>
      <DeleteModal
        showModal={showDeleteModal}
        canceledModal={() => setShowDeleteModal(false)}
        deleteCase={deleteUser}
      />
    </div>
  );
}
