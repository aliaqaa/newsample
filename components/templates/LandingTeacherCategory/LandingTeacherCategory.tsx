import TeacherCats from "@/components/modules/TeacherCats/TeacherCats";
import React from "react";
import Image from "next/image";
function LandingTeacherCategory() {
  return (
    <div className="relative flex justify-around items-center mt-40 bg-pic ">
    
      <span className="">
        <h1 className="text-3xl font-extrabold my-2">برترین اساتید رو همینجا پیدا می کنید!!</h1>
        <p>
          برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی <br />استان مازندران رو بهتر
          بشناسیم !
        </p>
      </span>
      <div className=" flex justify-center">
      <TeacherCats />

      </div>
    </div>
  );
}

export default LandingTeacherCategory;
