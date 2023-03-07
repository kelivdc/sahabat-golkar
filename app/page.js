import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahabat Golkar",
};

export default function Home() {
  return (
    <>      
      <div className="max-w-screen md:max-w-[65vw] m-auto min-h-[92vh] md:min-h-[99vh] relative">
        <div className="rounded-[50px] md:rounded-[105px] min-h-[91vh] md:min-h-[97vh] text-gray-600 m-auto grid place-items-center">
          <div className="relative w-full h-72 md:h-[100vh]">
            <Image src="/1.png" fill alt="Logo" />
          </div>
        </div>
        <div className="relative w-full h-72 md:h-[100vh]">
          <Image src="/2.png" fill alt="Mari Berkarya" />
        </div>
      </div>
    </>
  );
}
