import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNav from "@/components/HeaderNav";
import Contoh from "@/components/Contoh";

export const metadata = {
  title: "Data Penerima Bantuan Sekolah",
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
              Data penerima<br />Bantuan Sekolah
            </h1>
          </div>
        </div>
      </div>
      <div className="grid align-middle place-items-center flex-1">
      <table
      className="w-full border-2 border-white"
      cellPadding="2"
      cellSpacing="2"
    >
      <thead className="bg-blue-400">
        <tr>
          <th width="5%">No</th>
          <th>Nama Orang Tua</th>
          <th>Nama Siswa</th>
          <th>Alamat</th>
          <th>Asal Sekolah</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr className="rowColor">
          <td className="tcell text-right">1</td>
          <td className="tcell">Sopian</td>
          <td className="tcell">Balqish Shira Triutami</td>
          <td className="tcell">Dramaga Caringin No.44 Rt.001/006 Kelurahan Margajaya Kecamatan Bogor Barat Kota Bogor</td>
          <td className="tcell">SMP Negeri 1 Dramaga</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/sekolah-1.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">2</td>
          <td className="tcell">Yuliawati </td>
          <td className="tcell">Rabbil Nur Syafa</td>
          <td className="tcell">Jl. Bhayangkara II Gg. Selakopi 2 No.9 Rt.002/003 Sindangbarang, Kecamatan Bogor Barat Kota Bogor</td>
          <td className="tcell">SMP Negeri 14 Bogor</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/sekolah-2.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>       
      </tbody>
    </table>
      </div>
    </div>
    </>
  );
}

export default Penerima;
