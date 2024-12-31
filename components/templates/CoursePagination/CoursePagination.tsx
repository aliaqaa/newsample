import CoursesTopSort from "@/components/modules/CoursesTopSort/CoursesTopSort";
import { useGetCoursesWithPaginationApi } from "@/hooks/UseCourse";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CourseCard from "@/components/modules/CourseCard/CourseCard";
import CourseFilterBox from "../CourseFilterBox/CourseFilterBox";
import { Pagination } from "@nextui-org/react";

function CoursePagination() {
  const [grid, setGrid] = useState("grid");
  const router = useRouter();
  const { query } = router;

  const { data, isLoading } = useGetCoursesWithPaginationApi({
    RowsOfPage: 9,
    ...query,
  });

  const handlePageChange = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...query, page },
    });
  };

  return (
    <div className="flex w-full">
      <div className="flex">
        <CourseFilterBox />
      </div>
      <div className="flex flex-col w-full">
        <CoursesTopSort setGrid={setGrid} />

        <div
          className={
            data?.courseFilterDtos?.length > 0
              ? grid === "grid"
                ? "grid grid-cols-3 gap-10"
                : "flex flex-col justify-center "
              : ""
          }
        >
          {isLoading ? (
            <h2 className="font-peyda text-2xl text-secondary">
              در حال بارگذاری...
            </h2>
          ) : data?.courseFilterDtos?.length > 0 ? (
            data.courseFilterDtos.map((item: any, index: any) => (
              <CourseCard {...item} key={index} />
            ))
          ) : (
            <h2 className="font-peyda text-2xl text-secondary">
              هیچ دوره‌ای یافت نشد
            </h2>
          )}
        </div>

        {data?.totalPages > 1 && (
          <Pagination
            page={Number(query.page) || 1}
            total={data.totalPages}
            onChange={handlePageChange}
            className="mt-5"
          />
        )}
      </div>
    </div>
  );
}

export default CoursePagination;
