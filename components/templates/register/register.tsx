import React, { useState } from "react";
import { Form } from "@nextui-org/react";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";
import AuthInput from "@/components/modules/AuthInput/AuthInput";
import Link from "next/link";
import { registerPhone } from "@/interfaces/registerphone.interface";
import { useSendCodeApi } from "@/hooks/UseAuth";
import Register1 from "./register 1/Register1";
import Register2 from "./register 2/Register2";
function Register() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [smsKey, setSmsKey] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

 
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <div className="items-center w-52 m-auto ">
   
        {step === 1 && (
          <>
           <Register1 phone={phone} setPhone={setPhone} setStep={setStep}/>
          </>
        )}
        {step === 2 && (
          <>
            <Register2 phone={phone} setPhone={setPhone} setStep={setStep}/>
          </>
        )}
        {step === 3 && (
          <>
            <AuthInput
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
            <AuthInput
              placeholder="گذرواژه"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
            />
            <AuthInput
              placeholder="تایید گذرواژه"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=""
            />
            <AuthOrangButton title="ثبت نام" />
          </>
        )}
    </div>
  );
}

export default Register;