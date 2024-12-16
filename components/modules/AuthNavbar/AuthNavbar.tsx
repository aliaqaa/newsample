import logo from "@/public/icons/logo (1).png"
import Image from "next/image";
import UserAccButton from "../UserAccButton/UserAccButton";
function AuthNavbar() {
  return (
    <>
    <div className="container m-auto flex justify-between p-5">
      <Image src={logo} alt="logo" />
      <UserAccButton/>
    </div>
    </>
  )
}

export default AuthNavbar