import React, { useEffect, useState } from "react";
import CommentModal from "../../Components/CommentModal/CommentModal";
import { FaTrash } from "react-icons/fa";
import { BiSolidCommentError } from "react-icons/bi";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import { IoExitOutline } from "react-icons/io5";

export default function Comments() {
  const [commets, setComments] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentID, setCommentID] = useState();

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log("get comment eRRoR", err));
  };

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => {
        getAllComments();
        setShowDeleteModal(false);
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log("delete comment eRRoR", err));
  };

  const changeCommentText = (event) => {
    event.preventDefault();

    let newCommetText = { body: commentText };

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommetText),
    })
      .then((res) => {
        setShowEditModal(false);
        getAllComments();
      })
      .catch((err) => console.log("put comment eRRoR", err));
  };

  return (
    <div>
      <p className="my-4 text-2xl font-bold text-blue-600">کامنت ها</p>
      <hr />
      {commets.length ? (
        <table className="w-full text-right mt-8">
          <thead>
            <tr className="grid grid-cols-7">
              <th className="border-sky-400 px-2">اسم کاربر</th>
              <th className="border-sky-400 px-2">محصول</th>
              <th className="border-sky-400 px-2">کامنت</th>
              <th className="border-sky-400 px-2">تاریخ</th>
              <th className="border-sky-400 px-2">ساعت</th>
              <th className="border-sky-400 px-2">تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {commets.map((comment) => (
              <tr key={comment.id} className="grid grid-cols-7">
                <td className="border-t-[1px] border-sky-400 p-2">
                  {comment.userID}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {comment.productID}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCommentText(comment.body);
                      setShowCommentModal(true);
                    }}
                    className="bg-blue-600 text-white px-2 border-blue-600 border-[1px] active:bg-white active:text-blue-600 rounded-md"
                  >
                    دیدن نظر
                  </button>
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {comment.date}
                </td>
                <td className="border-t-[1px] border-sky-400 p-2">
                  {comment.hour}
                </td>
                <td className="col-span-2 border-t-[1px] border-sky-400 p-2 flex items-center gap-4">
                  <button
                    type="button"
                    className="bg-green-500 text-white px-2 border-green-500 border-[1px] active:bg-white active:text-green-500 rounded-md"
                  >
                    تایید
                  </button>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-2 border-blue-600 border-[1px] active:bg-white active:text-blue-600 rounded-md"
                  >
                    پاسخ
                  </button>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-2 border-blue-600 border-[1px] active:bg-white active:text-blue-600 rounded-md"
                    onClick={() => {
                      setCommentID(comment.id);
                      setCommentText(comment.body);
                      setShowEditModal(true);
                    }}
                  >
                    ویرایش
                  </button>
                  <FaTrash
                    className="text-[#ff0000] cursor-pointer"
                    onClick={() => {
                      setCommentID(comment.id);
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
          <BiSolidCommentError className="text-blue-600 text-9xl" />
          <p className="text-blue-600">کامنتی برای نمایش وجود ندارد</p>
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

      <CommentModal
        showModal={showCommentModal}
        canceledModal={() => setShowCommentModal(false)}
        commentText={commentText}
      />
      <DeleteModal
        showModal={showDeleteModal}
        canceledModal={() => setShowDeleteModal(false)}
        deleteCase={deleteComment}
      />
      <EditModal>
        <div
          className={`${
            showEditModal ? "" : "invisible opacity-0"
          } w-full h-screen fixed top-0 left-0 bg-[#a99c9c84] backdrop-blur-sm z-50 flex justify-center items-center transition-all duration-300`}
        >
          <div className="bg-white space-y-2 p-4 rounded-md">
            <IoExitOutline
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => setShowEditModal(false)}
            />
            <hr />
            <form className="flex flex-col items-center space-y-2">
              <textarea
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                name=""
                id=""
                className="outline-none border-[1px] border-blue-600 w-80 h-40 p-2 rounded-md resize-none"
              >
                {/* {commentText} */}
              </textarea>
              <button
                onClick={changeCommentText}
                className="bg-blue-600 text-white px-2 border-blue-600 border-[1px] active:bg-white active:text-blue-600 rounded-md"
              >
                ثبت کامنت
              </button>
            </form>
          </div>
        </div>
      </EditModal>
    </div>
  );
}
