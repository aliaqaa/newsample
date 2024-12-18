import React from "react";
import Image from "next/image";
import FavoriteCats from "@/mock/FavorieCats";
function LandingFavorite() {
  return (
    <>
      <li className="list-disc disc-green font-extrabold text-4xl mt-10">
        محبوب ترین دسته بندی ها
      </li>
      <h3 className="my-2 mb-10 font-extralight">
        گستره وسیعی از محبوب ترین دوره ها
      </h3>
      <div className=" container w-full h-96 relative my-10 ">
        <Image
          className="container-fluid w-full absolute bottom-0 -z-10"
          src="/icons/Rectangle 14 (1).png"
          alt="rec"
          width={10000}
          height={10000}
        />
        <div className="flex justify-center items-center gap-20 p-2 content-center"> 
          {FavoriteCats.map((item) => (
            <div key={item.id} className="rotate-45 flex flex-col mt-12 rounded-3xl bg-slate-50 p-10 items-center w-52 h-52 hover:bg-orange-400 shadow-inner shadow-lg">
                <div className="-rotate-45">
              <h1  className="font-extrabold text-3xl text-cyanlogin">{item.name}</h1>
              <Image className="p-4 items-center"  src={item.img} alt="item.img" width={100} height={100} />

                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingFavorite;
