import Image from "next/image";
import React from "react";
function LandingHero() {
  return (
    <div className="container flex justify-around my-20 p-10">
      <div id="RightSide">asdsads</div>
      <div id="leftSide">
        <span className="relative">
        <Image src="/icons/hero section main shape.png" width="500" height="100" alt="hero"/>
        <Image src="/icons/1000 student.png" width="100" height="100" alt="hero"/>
        <Image src="/icons/50 teacher.png" width="100" height="100" alt="hero"/>

        </span>
      </div>
    </div>
  );
}

export default LandingHero;
