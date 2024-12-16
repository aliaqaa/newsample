import React from "react";
import {Button, InputOtp, Form} from "@nextui-org/react";
import AuthOrangButton from "@/components/modules/authOrangeButton/AuthOrangButton";

export default function Register2({ setPhone, phone, setStep }: any) {
  const [otp, setOtp] = React.useState("");

  return (
    <Form
      className="flex w-full flex-col items-start gap-4 border"
      validationBehavior="native"
      onSubmit={(e) => {
        e.preventDefault();
       

        setStep(3);
      }}
    >
      <InputOtp
        isRequired
        aria-label="OTP input field"
        length={4}
        name="otp"
        placeholder="Enter code"
        validationBehavior="native"
        className="border "
      />
      <AuthOrangButton  title="تایید"/>
     
    </Form>
  );
}

