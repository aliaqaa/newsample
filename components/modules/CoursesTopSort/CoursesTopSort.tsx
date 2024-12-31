import React from "react";
import { MdSort } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

function CoursesTopSort({ setGrid }: any) {
  return (
    <div className="flex w-full justify-between items-center mb-10">
      <div className="flex items-center  p-1 shadow-xl mx-2 rounded-xl ">
        <label>
          <MdSort className="text-3xl" />
        </label>
        <select id="sort" className="bg-white font-extrabold outline-none ml-2">
          <option className="border rounded-3xl" value="newest">
            جدیدترین
          </option>
          <option className="border rounded-3xl" value="oldest">
            قدیمی ترین
          </option>
          <option className="border rounded-3xl" value="most expensive">
            گران ترین
          </option>
          <option className="border rounded-3xl" value="cheapest">
            ارزان ترین
          </option>
        </select>
      </div>
      <div className="flex items-center space-x-4"> {/* Use space-x-4 for spacing */}
        <IoGridOutline 
          onClick={() => setGrid('grid')} 
          className="cursor-pointer border bg-white text-3xl p-1 shadow-xl mx-2 rounded-lg" 
        />
        <FaListUl 
          onClick={() => setGrid('list')} 
          className="cursor-pointer border bg-white text-3xl p-1 shadow-xl mx-2 rounded-lg" 
        />
      </div>
    </div>
  );
}

export default CoursesTopSort;