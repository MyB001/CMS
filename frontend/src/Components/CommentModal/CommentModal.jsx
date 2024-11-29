import React from "react";
import ReactDOM from "react-dom";
import { IoExitOutline } from "react-icons/io5";

export default function CommentModal(props) {

  return ReactDOM.createPortal(
    <div
      className={`${
        props.showModal ? "visible opacity-100" : "invisible opacity-0"
      } w-full h-screen fixed top-0 left-0 bg-[#a99c9c84] backdrop-blur-sm z-50 flex justify-center items-center transition-all duration-300`}
    >
      <div className="max-w-96 space-y-2 bg-white rounded-md p-6 shadow-md shadow-blue-600">
        <IoExitOutline
          className="text-2xl text-red-600 cursor-pointer"
          onClick={() => props.canceledModal()}
        />
        <hr />
        <div className="flex justify-center items-center gap-4">
          {props.commentText}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
