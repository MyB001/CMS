import React from "react";
import ReactDOM from "react-dom";

export default function DeleteModal(props) {

  return ReactDOM.createPortal(
    <div
      className={`${
        props.showModal ? "" : "invisible opacity-0"
      } w-full h-screen fixed top-0 left-0 bg-[#a99c9c84] backdrop-blur-sm z-50 flex justify-center items-center transition-all duration-300`}
    >
      <div className="space-y-4 bg-white rounded-md p-8 shadow-md shadow-blue-600">
        <h1 className="text-xl font-semibold">
          آیا از حذف این مورد اطمینان دارید؟
        </h1>
        <div className="flex justify-center items-center gap-4">
          <button
            className="px-8 scale-105 py-2 border-2 rounded-md bg-green-500 text-white active:text-green-500 active:bg-white active:border-green-500"
            onClick={() => props.deleteCase()}
          >
            بله
          </button>
          <button
            className="px-8 scale-95 py-2 border-[1px] border-black rounded-md active:bg-red-600 active:text-white active:border-red-600"
            onClick={() => props.canceledModal()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
