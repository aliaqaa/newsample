import React from "react";
import { MdSort } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

function CoursesTopSort({ setGrid }:any) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex shadow-md p-2 rounded-xl">
        <label>
          <MdSort className="text-3xl" />
        </label>
        <select id="sort" className="bg-white font-extrabold outline-none">
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
      <div className="flex items-center p-3">
        <IoGridOutline onClick={() => setGrid('grid')} className="cursor-pointer border bg-white text-3xl " />
        <FaListUl onClick={() => setGrid('list')} className="cursor-pointer ml-4 border bg-white text-3xl " />
      </div>
    </div>
  );
}

export default CoursesTopSort;