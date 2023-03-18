import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNav from "@/components/HeaderNav";
import Sekolah from "@/components/Sekolah";


export const metadata = {
  title: "Data Penerima Bantuan Sekolah",
};

function Penerima() {    
  return (
    <>
       <div className="flex flex-col max-w-screen md:max-w-[85vw] m-auto min-h-screen relative bg-gradient-to-b from-white to-yellow-500 px-4 pt-4">
      
      <div className="flex justify-between">
        <div className="w-1/3">
          <Image src="/logo.png" width={270} height={270} alt="Logo" />
        </div>
        <div className="w-2/3">
          <div className="grid content-center h-full relative">
            <div className="absolute top-0 right-0 flex">
              <Link href="/"><div className="hover:bg-green-400 hover:rounded-md px-2 py-1">Logout</div></Link>
              <Link href="/bantuan"><div className="hover:bg-green-400 hover:rounded-md px-2 py-1">Bantuan dan Pelayanan</div></Link>
            </div>
            <h1 className="text-xl md:text-[40px] md:font-bold text-center m-auto uppercase leading-relaxed">
              Data penerima Bantuan Sekolah
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <Sekolah />
      </div>
    </div>
    </>
  );
}

export default Penerima;
