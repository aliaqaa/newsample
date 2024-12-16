import Footer from "../components/modules/Footer/Footer";
import Navbar from "../components/modules/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { DefaultLayoutProps } from "@/interfaces/children";
export default function DefautLayout( {children }:DefaultLayoutProps ) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  console.log(children)
  return (
    <div className="relative" style={{ paddingTop: "2rem" }}>
      {isMounted ? (
        <>
          <div className="container">
          <Navbar />
            {children}
            <Footer />
          </div>
        </>
      ) : <div>Loading...</div>}
    </div>
  );
}
