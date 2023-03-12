import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNav from "@/components/HeaderNav";

export const metadata = {
  title: "Penerima Bantuan Administrasi",
};

function Administrasi() {
  return (
    <>
      <div className="max-w-screen md:max-w-[65vw] m-auto min-h-[92vh] md:min-h-[99vh] relative bg-gradient-to-b from-white to-yellow-500 p-4">
        <HeaderNav />
        <div className="flex justify-between">
          <div className="relative w-1/2 md:w-[30%] h-48">
            <Image src="/logo.png" alt="Logo" fill />
          </div>
          <div className="w-1/2 md:w-[70%] px-4 md:px-10 m-auto">
            <h1 className="text-xl md:text-[40px] md:font-bold leading-10">
              DATA PENERIMA
              <br />
              BANTUAN ADMINISTRASI
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <table className="w-full border-2 border-white" cellPadding="2" cellSpacing="2">
            <thead className="bg-blue-400">
              <tr>
                <th width="5%">No</th>
                <th>Nama</th>
                <th>Kelurahan</th>
                <th>Photo</th>
              </tr>
            </thead>
           
          </table>
        </div>
      </div>
    </>
  );
}

export default Administrasi;
