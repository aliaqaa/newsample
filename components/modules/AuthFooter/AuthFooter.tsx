import Link from "next/link";
import AuthFooterItems from "@/mock/AuthFooter";
import Image from "next/image";
function AuthFooter() {
  return (
    <div className="flex justify-center my-9">
     
      {AuthFooterItems.map((item) => (
        <div key={item.id} className="mx-4">
          <Link href={item.link}>
            {" "}
            <Image src={item.img} alt={item.img} width="30" height="30" />
          </Link>
        </div>
      ))}
       <Link className="bg-green-700 p-2 rounded-3xl" href="mailto:ali.tousi77@gmail.com">
        Ali.tousi77@gmail.com
      </Link>
    </div>
  );
}

export default AuthFooter;
