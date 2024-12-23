import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { useGetTeachersApi } from "@/hooks/useTeachersApi";

export default function TeacherCats() {
  const { data, isLoading, error } = useGetTeachersApi();

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error loading teachers.</div>; 
  }
console.log(data)
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data &&
          data.map((teacher: any) => (
            <SwiperSlide key={teacher.teacherId}>
              <Image
                src={
                  teacher.pictureAddress && teacher.pictureAddress !== "Not-set"
                    ? teacher.pictureAddress
                    : "/icon/insta.png" // Fallback image
                }
                alt={teacher.fullName ? `Profile picture of ${teacher.fullName}` : "Profile picture"}
                width={100}
                height={100}
              />
              <div>{teacher.fullName || "Unknown Teacher"}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}