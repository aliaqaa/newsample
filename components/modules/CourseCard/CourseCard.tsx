import React from "react";
import { Divider } from "@nextui-org/react";
import { FaUser, FaLayerGroup } from "react-icons/fa";
import fallbackimg from "@/public/icons/next.png";
import { CgUserList } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";

function CourseCard({
  title,
  tumbImageAddress,
  describe,
  teacherName,
  cost,
  lastUpdate,
  courseId,
  userFavoriteId,
  userFavorite,
  isUserFavorite,
  levelName,
  currentRegistrants,
  courseRate,
}: any) {
  const courseStars = {
    size: 50,
    value: courseRate,
    edit: false,
    count: 5,
    color: "yellow",
    activeColor: "red",
  };
 
  return (
    <Link href={`${courseId}`} className="border shadow-sm w-[280px] h-[340px] rounded-2xl">
      <Image
        src={tumbImageAddress ? tumbImageAddress : fallbackimg}
        alt={title}
        layout="responsive"
        width={280}
        height={200}
        className="rounded-2xl scale-x-95 -translate-y-8"
      />
      <span className="flex justify-start mr-3 font-extrabold">{title}</span>
      <br />
      <div className="flex justify-between">
        <span className="font-extralight flex p-2 items-center gap-2">
          {teacherName}
          <FaUser className="text-gray-500" />
        </span>
        <span className="font-extralight flex p-2 items-center gap-2">
          {currentRegistrants}
          <CgUserList />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-extralight flex p-2 items-center gap-2">
          {levelName}
          <FaLayerGroup className="text-gray-500" />
        </span>
        <span className="font-extralight flex p-2 items-center gap-2">
          <ReactStars {...courseStars} />
        </span>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-3 text-blue-400">
        <MdAddShoppingCart />
        <span className="flex gap-2 ">
          {cost}
          <p>تومان</p>
        </span>
      </div>
    </Link>
  );
}

export default CourseCard;
