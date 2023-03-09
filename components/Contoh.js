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
          <td className="tcell">Januar</td>
          <td className="tcell">1234456567687</td>
          <td className="tcell">Jl. Bahari 9 no.12</td>
          <td className="tcell">Bengkel Sepeda</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">2</td>
          <td className="tcell">Mulyati</td>
          <td className="tcell">1234456567687</td>
          <td className="tcell">Jl. Siliwangi III no.60 </td>
          <td className="tcell">Toko Kueh</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">3</td>
          <td className="tcell">Wisnu</td>
          <td className="tcell">1234456567687</td>
          <td className="tcell">Komp. Perdamaian Blok IX</td>
          <td className="tcell">TK Islam</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">4</td>
          <td className="tcell">Pramudi</td>
          <td className="tcell">1234456567687</td>
          <td className="tcell">Jl. Wisata/IV no.20</td>
          <td className="tcell">Toko Sembako</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
        <tr className="rowColor">
          <td className="tcell text-right">5</td>
          <td className="tcell">Hilman</td>
          <td className="tcell">1234456567687</td>
          <td className="tcell">Jl. Belawan I no.25</td>
          <td className="tcell">Toko Sembako</td>
          <td className="tcell">
            <div className="relative rounded-full w-10 h-10 m-auto">
              <Image src="/bantuan.jpg" fill alt="Bantuan" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Contoh;
