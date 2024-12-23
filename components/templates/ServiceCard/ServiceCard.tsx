import ServicesItems from "@/mock/ServicesItems";
import React from "react";
import Image from "next/image";

function ServiceCard() {
  return (
    <>
      <li className="list-disc text-black disc-green font-extrabold text-4xl my-20">
        خدمات ما
      </li>
      <h3 className="my-2 mb-10 font-extralight text-gray-600">
        مجموعه‌ای از تمام آنچه شما نیاز دارید
      </h3>
      <div className="flex  justify-center gap-6">
        {ServicesItems.map((item) => (
          <div
            key={item.id}
            className={`relative shadow-lg border bg-${item.color}-100 rounded-xl w-80 p-6 text-center my-10`}
          >
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 ">
              <Image
                src={item.img}
                width={60}
                height={60}
                alt={item.title}
                className={`bg-${item.color}  rounded-full p-3 shadow-md`}
              />
            </span>
            <h2 className="text-xl font-semibold mt-8 text-${item.color}-600">
              {item.title}
            </h2>
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
