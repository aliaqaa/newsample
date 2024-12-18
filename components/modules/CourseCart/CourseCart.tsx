import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import fallbackimage from "@/public/icons/next.webp";
import { Divider } from "@nextui-org/react";
import { MdAddShoppingCart } from "react-icons/md";

function CourseCart({
  course,
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
}: any) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg  shadow-xl">
      <a href={`/courses/${course.courseId}`}>
        <Image
          src={course.tumbImageAddress === "null"&& "undefined" ? fallbackimage : course.tumbImageAddress}
          alt={`Thumbnail for ${course.title}`}
          width={300}
          height={200}
        />
      </a>
      <div className="p-5">
        <a href={`/courses/${courseId}`}>
          <h5 className="">
            {course.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {course.describe}
        </p>
        <Divider className="my-2"/>
        <div
          className="flex justify-between text-sky-400"
        >
          <span>
          {course.cost}ریال

          </span>
     <span>
     <MdAddShoppingCart />

     </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCart;