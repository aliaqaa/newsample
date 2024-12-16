import React from "react";
import AuthInput from "@/components/modules/AuthInput/AuthInput";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";
function login() {
  return (
    <div className="m-auto">
      <AuthInput type="email" placeholder="ایمیل"/>
      <AuthInput type="password" placeholder="رمز عبور" className="py-7"/>
    <AuthOrangButton title=""/>
    </div>
  );
}

export default login;
