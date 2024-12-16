import { Button } from "@nextui-org/react";
import React from "react";
interface AuthOrangButtonProps {
  title: string;
  
}
const AuthOrangButton: React.FC<AuthOrangButtonProps> = ({ title, }) => {
  return (
    <Button className="bg-authOrangbutton rounded-3xl text-white p-2 focus:outline-none focus:bg-orange-400" type="submit" >
      {title}
    </Button>
  );
};

export default AuthOrangButton;
