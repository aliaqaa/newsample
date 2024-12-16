import logo from "@/public/icons/logo (1).png";
import Image from "next/image";
import UserAccButton from "../UserAccButton/UserAccButton";
import defaultNavbarItems from "@/mock/DefualtNavbarItems";
import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";

function Navbar() {
  return (
    <>
      <div className="container m-auto flex justify-between p-5">
        <Image src={logo} alt="logo" />
        <div className="flex justify-around items-center">
        {defaultNavbarItems.map(item => (  
          <ActiveLink   
            key={item.id}          
            href={item.href}      
            className="nav-link mx-3 text-black"  
            activeClassName="active"    
          >  
            {item.title}        
          </ActiveLink>  
        ))}  
        </div>
        <UserAccButton />
      </div>
    </>
  );
}

export default Navbar;
