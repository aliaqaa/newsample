import TeacherCats from "@/components/modules/TeacherCats/TeacherCats";
import React from "react";
import Image from "next/image";
function LandingTeacherCategory() {
  return (
    <div className="relative flex justify-center mt-40  ">
      <Image
        className="container-fluid w-full absolute bottom-0 -z-10"
        src="/icons/Rectangle 14 (1).png"
        alt="rec"
        width={10000}
        height={10000}
      />
      <span className="bg-red-500">
        <h1>برترین اساتید رو همینجا پیدا می کنید!!</h1>
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
