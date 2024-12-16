import logo from "@/public/icons/logo (1).png";
import Image from "next/image";
import UserAccButton from "../UserAccButton/UserAccButton";
import Link from "next/link";
function AuthNavbar() {
  return (
    <>
      <div className="container m-auto flex justify-between p-5">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/auth">
        
        <UserAccButton />
        
        </Link>
      </div>
    </>
  );
}

export default AuthNavbar;
