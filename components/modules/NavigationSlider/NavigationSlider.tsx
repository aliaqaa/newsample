import { useGetCoursesTopApi } from "@/hooks/UseCourse";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CourseCart from "../CourseCart/CourseCart";
function NavigationSlider() {
  const { data, isLoading } = useGetCoursesTopApi(7);
  console.log(data);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      navigation={true}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        750: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1700: {
          slidesPerView: 4,
        },
        3100: {
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation]}
    >
      {data && data.map(course => (
      <SwiperSlide key={course.courseId}>
        <CourseCart course={course} />
      </SwiperSlide>
    ))}
    </Swiper>
  );
}

export default NavigationSlider;
