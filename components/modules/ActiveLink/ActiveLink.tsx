// components/ActiveLink.tsx  
import { useRouter } from "next/router";  
import Link from "next/link";  
import React from "react";  

interface ActiveLinkProps {  
  children: React.ReactNode;  // The content of the link  
  href: string;               // The URL to navigate to  
  className?: string;         // Additional CSS classes  
  activeClassName?: string;   // Class for active link  
}  

const ActiveLink: React.FC<ActiveLinkProps> = ({  
  children,  
  href,  
  className,  
  activeClassName,  
}) => {  
  const { asPath } = useRouter();  
  const isActive = asPath === href;  

  return (  
    <Link href={href} 
    className={isActive && activeClassName ? `${className} ${activeClassName}` : className}>  
        {children}   
       
    </Link>  
  );  
};  

export default ActiveLink;