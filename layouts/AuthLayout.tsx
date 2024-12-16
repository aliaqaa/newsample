import React, { useEffect, useState } from "react";
import AuthFooter from "@/components/modules/AuthFooter/AuthFooter";
import AuthNavbar from "@/components/modules/AuthNavbar/AuthNavbar";
export default function AuthLayout({ children }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="container items-center">
      {isMounted ? (
        <>
            <AuthNavbar />
          <div className="container">
            
            {children}
            <AuthFooter />
          </div>
        </>
      ) : null}
    </div>
  );
}
