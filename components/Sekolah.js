import Image from "next/image";
import React from "react";

function Sekolah() {
  const data = [
    {
      ortu: "Yuliawati",
      siswa: "Rabbil Nur Syafa",
      alamat:
        "Jl. Bhayangkara II Gg. Selakopi 2 No.9 Rt.002/003 Sindangbarang, Kecamatan Bogor Barat Kota Bogor",
      sekolah: "SMP Negeri 14 Bogor",
      image: "/sekolah-1.jpg" 
    },  
    {
      ortu: "Sopian",
      siswa: "Balqish Shira Triutami",
      alamat:
        "Dramaga Caringin No.44 Rt.001/006 Kelurahan Margajaya Kecamatan Bogor Barat Kota Bogor",
      sekolah: "SMP Negeri 1 Dramaga",
      image: "/sekolah-2.jpg" 
    },  
    {
      ortu: "Nur Fitriani",
      siswa: "Annisa Deda Ayundia",
      alamat:
        "Kp. Cipaku Haji Rt.003/007 Kelurahan Cipaku, Kecamatan Bogor Selatan Kota Bogor",
      sekolah: "SD Sukasari",
      image: "/sekolah-3.jpg" 
    },
    {
      ortu: "Yayah Ratnasari",
      siswa: "Febriyani",
      alamat:
        "RT 03 RW 10 Kelurahan Ciparigi Kecamatan Bogor Utara",
      sekolah: "SMPN 15 Kota Bogor",
      image: "/sekolah-4.jpeg" 
    },   
    {
      ortu: "Siti Nasirah",
      siswa: "Intan Nur Anriyani",
      alamat:
        "Jl Otista II kebon kelapa no 3 RT 03 RW 01 Kel Baranangsiang Kec Bogor Tengah",
      sekolah: "SMAN 1 BOGOR",
      image: "/sekolah-5.png" 
    },  
    {
      ortu: "Kiki Kisnawati",
      siswa: "Fachri Rachman",
      alamat:
        "Jl Pakoah Blk no 119 RT 02 RW 11 kel Baranangsiang Kec Bogor Tengah",
      sekolah: "SMPN 3 Bogor",
      image: "/sekolah-6.png" 
    },  
    {
      ortu: "Kartika",
      siswa: "Aisha Nayla Triasti",
      alamat:
        "Kalibata RT 03 RW 11 Kel Bantarjati kec Bogor Utara",
      sekolah: "SMPN 20 Bogor",
      image: "/sekolah-7.jpeg" 
    },  
    {
      ortu: "Youlla Wigyanti",
      siswa: "Galant MS",
      alamat:
        "Jl Mantarena No 14 RT 02 RW 03 Kel Panaragan Kec Bogor Tengah",
      sekolah: "SDN Panaragan 2",
      image: "/sekolah-8.png" 
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
          <th>Nama Orang Tua</th>
          <th>Nama Siswa</th>
          <th>Alamat</th>
          <th>Asal Sekolah</th>
          <th>Photo</th>
        </tr>
      </thead>
        <tbody>
          {data.map((item, no) => (
            <tr className="rowColor" key={no+1}>
              <td className="tcell text-center">{no+1}</td>
              <td className="tcell">{item.ortu}</td>
              <td className="tcell">{item.siswa}</td>
              <td className="tcell">{item.alamat}</td>
              <td className="tcell">{item.sekolah}</td>
              <td className="tcell">
                <div className="relative rounded-full m-auto">
                  <a href={item.image} target="_blank">
                  <Image
                    src={item.image}
                    width={150}
                    height={150}
                    alt="Sekolah"
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

export default Sekolah;
