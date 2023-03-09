import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNav from "@/components/HeaderNav";

export const metadata = {
  title: "Penerima Bantuan Kesehatan",
};

function Kesehatan() {
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
              BANTUAN KESEHATAN
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
            <tbody>
              <tr className="rowColor">
                <td className="tcell text-right">1</td>
                <td className="tcell">Alex Sanusi</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
                  </div>
                </td>
              </tr>
              <tr className="rowColor">
                <td className="tcell text-right">2</td>
                <td className="tcell">Sutarji</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
                  </div>
                </td>
              </tr>
              <tr className="rowColor">
                <td className="tcell text-right">3</td>
                <td className="tcell">Dansir</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
                  </div>
                </td>
              </tr>
              <tr className="rowColor">
                <td className="tcell text-right">4</td>
                <td className="tcell">Walijah</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
                  </div>
                </td>
              </tr>
              <tr className="rowColor">
                <td className="tcell text-right">5</td>
                <td className="tcell">Karto</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
                  </div>
                </td>
              </tr>
              <tr className="rowColor">
                <td className="tcell text-right">6</td>
                <td className="tcell">Walangsi</td>
                <td className="tcell">Desa Kuningan</td>
                <td className="tcell">
                  <div className="relative rounded-full w-10 h-10 m-auto">
                  <Image src="/bantuan.jpg" fill alt="Bantuan" />
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

export default Kesehatan;
