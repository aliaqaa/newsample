import { Button } from "@nextui-org/react";
import React from "react";
interface AuthOrangButtonProps {
  title?: string;
  disabled?: boolean;
  
}
const AuthOrangButton: React.FC<AuthOrangButtonProps> = ({ title,disabled }) => {
  return (
    <Button className="bg-authOrangbutton rounded-3xl text-white p-2 focus:outline-none focus:bg-orange-400" type="submit" disabled={disabled} >
      {title}
    </Button>
  );
};

export default AuthOrangButton;
