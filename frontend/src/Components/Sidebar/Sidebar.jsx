import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { GrLineChart } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FcFeedback } from "react-icons/fc";
import { BiMessageDetail } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";






export default function Sidebar() {
  return (
    <div className="h-[calc(100vh-125px)] sticky top-[114px] p-4 rounded-md shadow-md border-[1px] border-sky-300 shadow-sky-300 overflow-scroll">
      <div>
        <h3 className="text-gray-400 text-sm font-bold">داشبورد</h3>
        <ul className="p-1">
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/'} className="flex items-center gap-2">
              <FaHome className="text-gray-600" />
              <p className="text-gray-600">خانه</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <IoAnalytics className="text-gray-600" />
              <p className="text-gray-600">تجزیه و تحلیل</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <GrLineChart className="text-gray-600" />
              <p className="text-gray-600">فروش</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-bold">منو</h3>
        <ul className="p-1">
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/userList'} className="flex items-center gap-2">
              <FaUsers className="text-gray-600" />
              <p className="text-gray-600">کاربران</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/newUser'} className="flex items-center gap-2">
              <FaUserPlus className="text-gray-600" />
              <p className="text-gray-600">کاربر جدید</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/products'} className="flex items-center gap-2">
              <BsShop className="text-gray-600" />
              <p className="text-gray-600">محصولات</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/newProduct'} className="flex items-center gap-2">
              <BsShop className="text-gray-600" />
              <p className="text-gray-600">محصول جدید</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/orders'} className="flex items-center gap-2">
              <TbTransactionDollar className="text-gray-600" />
              <p className="text-gray-600">سفارشات</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/comments'} className="flex items-center gap-2">
              <TbReportSearch className="text-gray-600" />
              <p className="text-gray-600">کامنت ها</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-bold">اطلاع رسانی</h3>
        <ul className="p-1">
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <CiMail className="text-gray-600" />
              <p className="text-gray-600">ایمیل</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <FcFeedback className="text-gray-600" />
              <p className="text-gray-600">بازخورد</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <BiMessageDetail className="text-gray-600" />
              <p className="text-gray-600">پیام ها</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-bold">کارکنان</h3>
        <ul className="p-1">
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <GrUserManager className="text-gray-600" />
              <p className="text-gray-600">مدیریت</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <IoAnalytics className="text-gray-600" />
              <p className="text-gray-600">تجزیه و تحلیل</p>
            </Link>
          </li>
          <li className="hover:bg-gray-300 transition-all duration-300 rounded-md p-1">
            <Link to={'/notFound'} className="flex items-center gap-2">
              <TbReportSearch className="text-gray-600" />
              <p className="text-gray-600">گزارشات</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
