/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../Components/Sidebar";

const ProductPage = () => (
  <Sidebar>
    <div className="flex flex-col bg-slate-50 p-4 rounded shadow-lg h-full">
      <p className="text-4xl text-[#3d2c83] font-bold">User</p>
      <div className="flex justify-end mt-20 mb-6">
        <button className="">
          <a
            className="flex justify-center py-2 item-center w-40 h-9 bg-[#3d2c83] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg  text-sm"
            href="/user/addUser"
          >
            Add User
          </a>
        </button>
      </div>
      {/* table */}
      <table className="overflow-hidden rounded text-sm text-left text-black w-full">
        <thead className="text-xs text-[#3d2c83] uppercase bg-gray-200">
          <tr className="">
            <th scope="col" className="px-4 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-8 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 py-4">Gitar Akustik</td>
            <td className="px-6 py-4">Rp 55.000.000</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-[#FFA724] ">
                <a href="/user/editUser">Edit</a>
              </a>
              <a href="#" className="font-medium text-red-600 ml-6 ">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Sidebar>
);
export default ProductPage;
