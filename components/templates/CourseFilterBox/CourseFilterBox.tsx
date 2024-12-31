import MainButton from '@/components/modules/CourseMainButton/MainButton';
import { useGetAllCourseLevelApi, useGetCourseTypesApi, useGetTechnologiesApi } from '@/hooks/UseCourse';
import { useGetTeachersApi } from '@/hooks/useTeachersApi';
import { Accordion, AccordionItem, Button, Card, Checkbox, CheckboxGroup, Switch } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

function CourseFilterBox() {
  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<any>();
  const { pathname, query } = router;
  
  const { data: courseLevelData, isLoading: courseLevelIsLoading } = useGetAllCourseLevelApi();
  const { data: courseTypesData, isLoading: courseTypesIsLoading } = useGetCourseTypesApi();
  const { data: technologiesData, isLoading: technologiesIsLoading } = useGetTechnologiesApi();
  const { data: teachersData, isLoading: teachersIsLoading } = useGetTeachersApi();

  const clearAllFiltersHandler = () => {
    reset(); // Reset form values
    router.push({ pathname }); // Clear query params
  };

  const submitFormHandler: SubmitHandler<any> = (data) => {
    const newQuery = {
      ...query,
      ListTech: data.ListTech?.join(",") || "",
      courseLevelId: data.courseLevelId?.join(",") || "",
      CourseTypeId: data.CourseTypeId?.join(",") || "",
      TeacherId: data.TeacherId?.join(",") || "",
      TechCount: data.ListTech ? data.ListTech.length : 0,
    };
    
    router.push({ pathname, query: newQuery });
  };

  return (
    <div className="w-52 border rounded-3xl text-start mb-6">
      <div className="grid grid-cols-2 md:grid-cols-1 bg-white p-4 rounded-xl gap-5 dark:bg-dark-lighter">
        <h2 className="col-span-2 md:col-span-1 font-peyda text-[18px] lg:text-[20px] text-lightTitle dark:text-darkTitle">
          فیلتر ها
        </h2>
        <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-5">
          <MainButton content="پاک کردن فیلتر" className="bg-secondary dark:bg-secondary text-btnText w-full font-peyda" onClick={clearAllFiltersHandler} />
          <MainButton content="جستجو" className="bg-primary dark:bg-primary-darker text-btnText w-full font-peyda" type="submit" />
          
          {/* Completed Checkbox */}
          <Card className="shadow-none p-3 bg-mainBodyBg dark:bg-dark flex flex-row items-center justify-between gap-1" dir="rtl">
            <p>تکمیل شده</p>
            <Controller
              defaultValue={false}
              name="isCompleted"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Switch
                  isSelected={value}
                  onChange={(event) => onChange(event.target.checked)}
                />
              )}
            />
          </Card>

          {/* Free Checkbox */}
          <Card className="shadow-none p-3 bg-mainBodyBg dark:bg-dark flex flex-row justify-between gap-1" dir="rtl">
            <p>رایگان</p>
            <Controller
              defaultValue={false}
              name="isFree"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Switch
                  isSelected={value}
                  onChange={(event) => onChange(event.target.checked)}
                />
              )}
            />
          </Card>

          {/* Technologies Accordion */}
          <Accordion variant="splitted" className="font-vazir px-0">
            <AccordionItem key={1} className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle" aria-label="دسته بندی" title={<p className="text-sm lgb:text-lg">دسته بندی</p>}>
              {technologiesIsLoading ? (
                <SkeletonLoader count={4} />
              ) : (
                <Controller
                  defaultValue={[]}
                  name="ListTech"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      value={value}
                      classNames={{ wrapper: ["gap-y-4 pb-2"] }}
                      onChange={onChange}
                      color="success"
                    >
                      {technologiesData.filter(item => item.parentId === null).map((item, index) => (
                        <Checkbox key={index} className="checkBoxContainer" value={item.id.toString()}>
                          <p className="flex justify-between text-sm">{item.techName}</p>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  )}
                />
              )}
            </AccordionItem>

            {/* Course Level Accordion */}
            <AccordionItem key={2} className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle" aria-label="سطح دوره ها" title={<p className="text-sm lgb:text-lg">سطح دوره</p>}>
              {courseLevelIsLoading ? (
                <SkeletonLoader count={3} />
              ) : (
                <Controller
                  defaultValue={[]}
                  name="courseLevelId"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      value={value}
                      classNames={{ wrapper: ["gap-y-4 pb-2"] }}
                      onChange={onChange}
                      color="success"
                    >
                      {courseLevelData.map((item, index) => (
                        <Checkbox key={index} className="checkBoxContainer" value={item.id.toString()}>
                          <p className="flex justify-between text-sm">{item.levelName}</p>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  )}
                />
              )}
            </AccordionItem>

            {/* Course Type Accordion */}
            <AccordionItem key={3} className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle" aria-label="نوع دوره" title={<p className="text-sm lgb:text-lg">نوع دوره</p>}>
              {courseTypesIsLoading ? (
                <SkeletonLoader count={3} />
              ) : (
                <Controller
                  defaultValue={[]}
                  name="CourseTypeId"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      value={value}
                      classNames={{ wrapper: ["gap-y-4 pb-2"] }}
                      onChange={onChange}
                      color="success"
                    >
                      {courseTypesData.map((item, index) => (
                        <Checkbox key={index} className="checkBoxContainer" value={item.id.toString()}>
                          <p className="flex justify-between text-sm">{item.typeName}</p>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  )}
                />
              )}
            </AccordionItem>

            {/* Teachers Accordion */}
            <AccordionItem key={4} className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle" aria-label="اساتید" title={<p className="text-sm lgb:text-lg">اساتید</p>}>
              {teachersIsLoading ? (
                <SkeletonLoader count={4} />
              ) : (
                <Controller
                  defaultValue={[]}
                  name="TeacherId"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckboxGroup
                      value={value}
                      classNames={{ wrapper: ["gap-y-4 pb-2"] }}
                      onChange={onChange}
                      color="success"
                    >
                      {teachersData.map((item, index) => (
                        <Checkbox key={index} className="checkBoxContainer" value={item.teacherId.toString()}>
                          <p className="flex justify-between text-sm">{item.fullName}</p>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  )}
                />
              )}
            </AccordionItem>
          </Accordion>
        </form>
      </div>
    </div>
  );
}

// Helper component for loading skeletons
const SkeletonLoader = ({ count }) => (
  <div className="space-y-3">
    {Array.from({ length: count }, (_, index) => (
      <Skeleton className="rounded-md h-[20px] w-2/3" key={index} />
    ))}
  </div>
);

export default CourseFilterBox;