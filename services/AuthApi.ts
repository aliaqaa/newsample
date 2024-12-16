import { finalRegisterFormProps } from "@/interfaces/finalRegisterForm.interface";
import { loginFormType } from "@/interfaces/loginForm.interface";
import { registerPhone } from "@/interfaces/registerphone.interface";
import { resetPasswordForm1Type, resetPasswordForm2Type } from "@/interfaces/resetPasswordForm.interface";
import { verifyPhoneNumber } from "@/interfaces/verifyPhoneNumber.interface";
import httpService from "@/services/httpService";





const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const sendCodeApi = (payload: registerPhone) => {
  return httpService.post(baseUrl + `Sign/SendVerifyMessage`, payload);
};

export const verifyCodeApi = (payload: verifyPhoneNumber) => {
  return httpService.post(baseUrl + `Sign/VerifyMessage`, payload);
};

export const registerNewUserApi = (payload: finalRegisterFormProps) => {
  return httpService.post(baseUrl + `Sign/Register`, payload);
};

export const loginUserApi = (payload: loginFormType) => {
  return httpService.post(baseUrl + "Sign/Login", payload);
};

export const resetPasswordUserApi = (payload: resetPasswordForm1Type) => {
  return httpService.post(baseUrl + "Sign/ForgetPassword", payload);
};

export const resetFinalStepPasswordUserApi = (
  payload: resetPasswordForm2Type
) => {
  return httpService.post(baseUrl + "Sign/Reset", payload);
};
