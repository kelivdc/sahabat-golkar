import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="center">
      <div className="max-w-screen md:max-w-[60vw] m-auto border-4 md:border-8 border-red-500 bg-blue-400 min-h-[92vh] md:min-h-[99vh]">
        <div className="bg-[#ffcd01] rounded-[50px] md:rounded-[105px] min-h-[91vh] md:min-h-[97vh] text-gray-600 m-auto grid place-items-center">
          <div className="relative w-full md:w-[95%] h-60 md:h-[80vh]">
            <Image src="/logo.png" fill sizes="(width: 768px) 100vw, (max-width: 1800vw) 70vw, 33vw" alt="Logo" />
          </div>
        </div>
      </div>      
    </div>
  );
}
