import Image from "next/image";
import React from "react";

function Umkm() {
  const data = [
    {
      nama: "Nellyani Boru Sipayung",
      nik: "3271045810840016",
      alamat:
        "Jl. Komplek IPB 1 Rt.004/008 Kelurahan Loji, Kecamatan Bogor Barat Kota Bogor",
      jenis: "Pedagang Kelontongan",
      image: "/bantuan-0.jpg" 
    },
    {
      nama: "Sri Sobarni",
      nik: "3271046402710002",
      alamat:
        "Jl. Menteng, Gg. Pala No.8 Rt.003/002 Kelurahan Menteng, Kecamatan Bogor Barat Kota Bogor",
      jenis: "Pedagang Kue Basah",
      image: "/bantuan-1.jpg" 
    },
    {
      nama: "A. Sanusi",
      nik: "3271011901120019",
      alamat:
        "Jl. Layungsari II Rt.002/018 Kelurahan Empang, Kecamatan Bogor Selatan Kota Bogor",
      jenis: "Pedagang Kelontongan dan Warung Nasi",
      image: "/bantuan-3.jpg" 
    },
    {
      nama: "Ivana Sasmita",
      nik: "3271014606800017",
      alamat:
        "Jl. Pahlawan Rt.002/008 Kelurahan Empang Kecamatan Bogor Selatan Kota Bogor",
      jenis: "Jualan Kopi dan Makanan Ringan",
      image: "/bantuan-3a.jpg" 
    },
    {
      nama: "Haryadi",
      nik: "3271060303640006",
      alamat:
        "Cimanggu gg. Pasama RT 003 RW 001 Kel Kedung Jaya Kecamatan Tanah Sereal",
      jenis: "Toko Kelontong",
      image: "/bantuan-5.jpeg" 
    },
    {
      nama: "Jamil",
      nik: "3271063001810003",
      alamat:
        "Kp Seremped RT 002/ RW 006, Kel Mekarwangi Kec Tanah Sareal",
      jenis: "Furniture",
      image: "/bantuan-6.jpeg" 
    },
    {
      nama: "Ujang",
      nik: "32710332307700003",
      alamat:
        "Panaragan ASPOL RT 04 RW 04, Kelurahanan Panaragan, Kec Bogor Tengah",
      jenis: "UMKM",
      image: "/bantuan-7.png" 
    },
    {
      nama: "Rukiyah",
      nik: "3271055904740017",
      alamat:
        "Kalibata RT04 RW03 Kelurahan Bantarjati Kec Bogor utara",
      jenis: "Makanan",
      image: "/bantuan-7.jpeg" 
    },
    {
      nama: "Suryanto",
      nik: "3271022007710008",
      alamat:
        "Ciheuleut RT 02 RW 09 Kel Baranangsiang Kec Bogor Timur",
      jenis: "Kelontong",
      image: "/bantuan-9.png" 
    },
    {
      nama: "Yati",
      nik: "-",
      alamat:
        "Kp Mandala RT 02 RW 02 Kelurahan Ciparigi Kecamatan Bogor Utara",
      jenis: "Kelontong",
      image: "/bantuan-10.jpeg" 
    },
   
  ];
  return (
    <>
      <table
        className="w-full border-2 border-white mt-10"
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
          {data.map((item, no) => (
            <tr className="rowColor" key={no+1}>
              <td className="tcell text-center">{no+1}</td>
              <td className="tcell">{item.nama}</td>
              <td className="tcell">{item.nik}</td>
              <td className="tcell">{item.alamat}</td>
              <td className="tcell">{item.jenis}</td>
              <td className="tcell">
                <div className="relative rounded-full m-auto">
                  <a href={item.image} target="_blank">
                  <Image
                    src={item.image}
                    width={150}
                    height={150}
                    alt="Bantuan"
                  />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Umkm;
