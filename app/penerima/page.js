'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import Umkm from "@/components/Umkm";


function Penerima() {
  return (
    <>
       <div className="flex flex-col max-w-screen md:max-w-[85vw] m-auto min-h-screen relative max-h-screen bg-gradient-to-b from-white to-yellow-500 px-4 pt-4">
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
              Data penerima Bantuan UMKM
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <Umkm />
      </div>
    </div>
    </>
  );
}

export default Penerima;
