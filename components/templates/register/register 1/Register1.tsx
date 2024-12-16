import AuthInput from "@/components/modules/AuthInput/AuthInput";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";
import { useSendCodeApi } from "@/hooks/UseAuth";
import { Form } from "@nextui-org/react";
import { AppProps } from "next/app";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Register1({ setPhone, phone, setStep }: any) {
  const { mutate, isPending, isSuccess } = useSendCodeApi();
  useEffect(() => {
    if (isSuccess) {
        setStep(2);
    
    }
  }, [isSuccess])
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    mutate(phone);
  };
  return (
    <div className="flex flex-col">
      <Form onSubmit={onSubmit}>
        <AuthInput
          placeholder="شماره همراه"
          onChange={(e) => setPhone(e.target.value)}
          className="my-7"
        />
        <AuthOrangButton title="دریافت کد تایید" />
        <Link href="/auth?type=login" className="text-sky-500 font-extrabold">
          ورود
        </Link>
      </Form>
    </div>
  );
}

export default Register1;
