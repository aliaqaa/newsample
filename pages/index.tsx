import LandingArticleGrid from "@/components/templates/LandingArticleGrid/LandingArticleGrid";
import CourseCategory from "@/components/templates/LandingCourseCategory/CourseCategory";
import LandingFavorite from "@/components/templates/LandingFavorite/LandingFavorite";
import LandingHero from "@/components/templates/LandingHero/LandingHero";
import LandingTeacherCategory from "@/components/templates/LandingTeacherCategory/LandingTeacherCategory";
import ServiceCard from "@/components/templates/ServiceCard/ServiceCard";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <>
      <LandingHero />
      <LandingFavorite />
      <CourseCategory />
      <LandingTeacherCategory />
      <ServiceCard />
      <LandingArticleGrid />
    </>
  );
}

export default index;
