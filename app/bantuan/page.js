import Image from "next/image";
import Link from "next/link";
import React from "react";

function Bantuan() {
  return (

    <div className="flex flex-col max-w-screen md:max-w-[85vw] m-auto min-h-screen relative bg-gradient-to-b from-white to-yellow-500 px-4 pt-4">
      <div className="flex justify-between">
        <div className="w-1/3">
          <Image src="/logo.png" width={270} height={270} alt="Logo" />
        </div>
        <div className="w-2/3">
          <div className="grid content-center h-full relative">
            <Link href="/"><div className="absolute top-0 right-0 hover:bg-green-400 hover:rounded-md px-2 py-1">Logout</div></Link>
            <h1 className="text-xl md:text-[40px] md:font-bold text-center m-auto">
              BANTUAN DAN PELAYANAN
            </h1>
          </div>
        </div>
      </div>
      <div className="grid align-middle place-items-center flex-1">
        <div className="w-2/3">
          <Link href="/penerima">
            <div className="text-base md:text-xl lg:text-2xl py-3 w-full my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data penerima Bantuan UMKM
            </div>
          </Link>
          <Link href="/sekolah">
            <div className="text-base md:text-xl lg:text-2xl py-3 w-full my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data Penerima Bantuan Sekolah
            </div>
          </Link>
          <Link href="/kesehatan">
            <div className="text-base md:text-xl lg:text-2xl py-3 w-full my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data Pengguna Pelayanan Kesehatan
            </div>
          </Link>
          <Link href="/administrasi">
            <div className="text-base md:text-xl lg:text-2xl py-3 w-full my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data Pengguna Pelayanan Administrasi
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bantuan;
