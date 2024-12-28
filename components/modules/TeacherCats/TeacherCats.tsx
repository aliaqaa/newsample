import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./style.css";
import { useGetTeachersApi } from "@/hooks/useTeachersApi";

export default function TeacherCats() {
  const { data, isLoading } = useGetTeachersApi();
if (isLoading) {
  return <h1>is loading</h1>
}
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper1 "
      >
        <SwiperSlide>
          {" "}
          <Image
            className="container-fluid w-full absolute bottom-0 -z-10"
            src="/icons/Rectangle 28.png"
            alt="rec"
            width={10000}
            height={10000}
          />
        </SwiperSlide>
       {data?.map((pic)=>
        <SwiperSlide key={pic.teacherId} className="swiper-slide1">
           <img
            className="container-fluid w-full h-ful"
            src={pic.pictureAddress}
            alt="teacher"
            width={1000}
            height={1000}
          />
        </SwiperSlide>
       )}
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
