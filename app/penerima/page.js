import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNav from "@/components/HeaderNav";
import Contoh from "@/components/Contoh";

export const metadata = {
  title: "Penerima Bantuan UMKM",
};

function Penerima() {
  return (
    <>      
       <div className="flex flex-col max-w-screen md:max-w-[65vw] m-auto min-h-screen relative max-h-screen bg-gradient-to-b from-white to-yellow-500 px-4 pt-4">
      <div className="flex justify-between">
        <div className="w-1/3">
          <Image src="/logo.png" width={270} height={270} alt="Logo" />
        </div>
        <div className="w-2/3">
          <div className="grid content-center h-full relative">
            <div className="absolute top-0 right-0 flex">
              <Link href="/"><div className="hover:bg-green-400 hover:rounded-md px-2 py-1">Home</div></Link>
              <Link href="/bantuan"><div className="hover:bg-green-400 hover:rounded-md px-2 py-1">Bantuan dan Pelayanan</div></Link>
            </div>
            <h1 className="text-xl md:text-[40px] md:font-bold text-center m-auto uppercase leading-relaxed">
              Data penerima<br />Bantuan UMKM
            </h1>
          </div>
        </div>
      </div>
      <div className="grid align-middle place-items-center flex-1">
        <Contoh />
      </div>
    </div>
    </>
  );
}

export default Penerima;
