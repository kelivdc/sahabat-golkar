'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import Umkm from "@/components/Umkm";


function Penerima() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://kf.kobo.mangdarma.com/api/v2/assets/aMvb8rMTt8986mk5AcKnmS/data.json', {
  //       mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Token e6b668c51a38a488d21c3752f7b41009fd9ebe12',
  //         'Access-Control-Allow-Origin': '*',
  //         'Cookie': 'csrftoken=Lmd3XKkPqfv7VGHboyZOCPJlM3rKoBkqgXaP7QmwBzdvw0fmr5lI68zE0P3X5dvN'
  //       },
  //     });
  //     const data = await response.json();
  //     setData(data);
  //   };
  
  //   fetchData();
    // async function fetchData() {
    //   console.log('Load data ----')
    //   const response = await fetch('https://kf.kobo.mangdarma.com/api/v2/assets/aMvb8rMTt8986mk5AcKnmS/data.json', {
    //     mode: 'no-cors',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Token e6b668c51a38a488d21c3752f7b41009fd9ebe12',
    //       'Access-Control-Allow-Origin': '*',
    //       'Cookie': 'csrftoken=Lmd3XKkPqfv7VGHboyZOCPJlM3rKoBkqgXaP7QmwBzdvw0fmr5lI68zE0P3X5dvN'
    //     }
    //   });
    //   const json = await response.json();
    //   setData(json);
    // };
    // fetchData();
  // });

  // // if (!data) {
  // //   return <div>Loading...</div>;
  // // }
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
