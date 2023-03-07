import Image from "next/image";
import Link from "next/link";
import React from "react";

function Bantuan() {
  return (
    <div className="max-w-screen md:max-w-[65vw] m-auto min-h-[92vh] md:min-h-[99vh] relative bg-gradient-to-b from-white to-yellow-500 p-4">
      <div className="absolute top-3 right-10 p-1 hover:bg-green-400 hover:rounded-md">
        <Link href="/">Home</Link>
      </div>
      <div className="flex justify-between">
        <div className="relative w-1/2 md:w-[30%] h-48">
          <Image src="/logo.png" alt="Logo" fill />
        </div>
        <div className="w-1/2 md:w-[80%] px-4 md:px-10 m-auto">
          <h1 className="text-xl md:text-[40px] md:font-bold leading-10 text-center">
            BANTUAN DAN PELAYANAN
          </h1>
        </div>
      </div>
      <div class="grid h-[500px] place-items-center">
        <div className="m-auto leading-10">
          <Link href="/penerima">
            <div className="py-1 px-[150px] my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data penerima Bantuan UMKM
            </div>
          </Link>
          <Link href="/sekolah">
            <div className="py-1 px-[150px] my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data Penerima Bantuan Sekolah
            </div>
          </Link>
          <Link href="/kesehatan">
            <div className="py-1 px-[150px] my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
              Data Pengguna Pelayanan Kesehatan
            </div>
          </Link>
          <Link href="/administrasi">
          <div className="py-1 px-[150px] my-4 bg-white text-center rounded-2xl text-green-700 hover:bg-green-700 hover:text-white">
            Data Pengguna Pelayanan Administrasi
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bantuan;
