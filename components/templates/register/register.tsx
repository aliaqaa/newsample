import React, { useState } from "react";
import { Form } from "@nextui-org/react";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";
import AuthInput from "@/components/modules/AuthInput/AuthInput";
import Link from "next/link";
import { sendCodeApi } from "@/services/useAuth";
import swal from "sweetalert"; // Make sure to install and import SweetAlert

function Register() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [smsKey, setSmsKey] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const { mutate, isPending, isSuccess } = sendCodeApi();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step === 1) {
      mutate({ phone }, {
        onSuccess: () => {
          swal("Code has been sent to your phone");
          setStep(2); 
        },
        onError: () => {
          swal("Failed to send code, please try again.");
        }
      });
    } else if (step === 2) {
  
      console.log("Verify SMS code:", smsKey);
     
      setStep(3); 
    } else if (step === 3) {
  
      console.log("Register user with email:", email, "and password:", password);
      // Add your registration logic here
    }
  };

  return (
    <div className="items-center w-52 m-auto ">
      <Form validationBehavior="native" onSubmit={onSubmit}>
        {step === 1 && (
          <>
            <AuthInput
              placeholder="شماره همراه"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="my-7"
            />
            <AuthOrangButton title="دریافت کد تایید" disabled={isPending} />
            <Link href="/auth?type=login" className="text-sky-500 font-extrabold">
              ورود
            </Link>
          </>
        )}
        {step === 2 && (
          <>
            <AuthInput
              placeholder="کد تایید"
              value={smsKey}
              onChange={(e) => setSmsKey(e.target.value)}
              className=""
            />
            <AuthOrangButton title="تایید کد" />
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
      </Form>
    </div>
  );
}

export default Register;