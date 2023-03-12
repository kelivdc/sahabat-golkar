import Image from "next/image";
import React from "react";

function Contoh() {
  return (
    <table
      className="w-full border-2 border-white"
      cellPadding="2"
      cellSpacing="2"
    >
      <thead className="bg-blue-400">
        <tr>
          <th width="5%">No</th>
          <th>Nama</th>
          <th>NIK</th>
          <th>Alamat</th>
          <th>Jenis Usaha</th>
          <th>Photo Usaha</th>
        </tr>
      </thead>
      <tbody>
        <tr className="rowColor">
          <td className="tcell text-right">1</td>
          <td className="tcell">Sri Sobarni</td>
          <td className="tcell">3271046402710002</td>
          <td className="tcell">Jl. Menteng, Gg. Pala No.8 Rt.003/002 Kelurahan Menteng, Kecamatan Bogor Barat Kota Bogor</td>
          <td className="tcell">Pedagang Kue Basah</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan-1.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">2</td>
          <td className="tcell">Nellyani Boru Sipayung</td>
          <td className="tcell">3271045810840016</td>
          <td className="tcell">Jl. Komplek IPB 1 Rt.004/008 Kelurahan Loji, Kecamatan Bogor Barat Kota Bogor</td>
          <td className="tcell">Pedagang Kelontongan</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan-2.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
       
      </tbody>
    </table>
  );
}

export default Contoh;
