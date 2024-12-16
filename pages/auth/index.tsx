import React, { useEffect } from "react";
import Login from "@/components/templates/login/login";
import Register from "@/components/templates/register/register";
import { useRouter } from "next/router";

function Auth() {
  const router = useRouter();

  const authType = router.query.type || "register";

  const handleAuthChange = (authType:any) => {
    router.push(`/auth?type=${authType}`, undefined, { shallow: true });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <button
          onClick={() => handleAuthChange("register")}
          className="cursor-pointer"
        >
          ثبت نام
        </button>
        <button
          onClick={() => handleAuthChange("login")}
          className="cursor-pointer"
        >
          ورود
        </button>
      </div>
      <div className="bg-linear-bg w-[700px] h-[400px] rounded-2xl items-center content-center p-10">
        {authType === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default Auth;
