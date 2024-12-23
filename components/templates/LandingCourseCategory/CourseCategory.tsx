import NavigationSlider from "@/components/modules/NavigationSlider/NavigationSlider";
import React from "react";

function CourseCategory() {
  return (
    <div>
       <li className="list-disc disc-green font-extrabold text-4xl my-20 ">
       دوره های آموزشی
      </li>
      <h3 className="my-2 mb-10 font-extralight">
      به روز ترین دوره هایی که میتونید پیدا کنید
      </h3>
    <NavigationSlider/>
    
    
    </div>
  );
}

export default CourseCategory;
