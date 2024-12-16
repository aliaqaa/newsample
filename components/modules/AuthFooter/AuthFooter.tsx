import Link from "next/link";
import AuthFooterItems from "@/mock/AuthFooter";
import Image from "next/image";
function AuthFooter() {
  return (
    <div className="flex justify-center my-9 items-center">
     
      {AuthFooterItems.map((item) => (
        <div key={item.id} className="mx-1">
          <a href={item.link}>
            {" "}
            <Image src={item.img} alt={item.img} width="40" height="40" />
          </a>
        </div>
      ))}
       <Link className="bg-cyanlogin p-2 rounded-3xl text-white" href="mailto:ali.tousi77@gmail.com">
        Ali.tousi77@gmail.com
      </Link>
    </div>
  );
}

export default AuthFooter;
