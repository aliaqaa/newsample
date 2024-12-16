import AuthInput from "@/components/modules/AuthInput/AuthInput";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";
import { useSendCodeApi } from "@/hooks/UseAuth";
import { Form } from "@nextui-org/react";
import { AppProps } from "next/app";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Register1({ setPhoneNumber, phoneNumber, setStep }: any) {
  const { mutate, isPending, isSuccess } = useSendCodeApi();
  useEffect(() => {
    if (isSuccess) {
      setStep(2);
    }
  }, [isSuccess]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(phoneNumber);
  };
  return (
    <div className="flex flex-col justify-center items-center content-center ">
      <Form onSubmit={onSubmit}>
        <AuthInput
          placeholder="شماره همراه"
          onChange={(e) => setPhoneNumber(e.target.value)}
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
