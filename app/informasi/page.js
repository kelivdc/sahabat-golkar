import Image from "next/image";
import React from "react";

function Informasi() {
  return (
    <>
      <div className="max-w-screen md:max-w-[65vw] m-auto min-h-[92vh] md:min-h-[99vh] relative bg-gradient-to-b from-white to-yellow-500 p-4">
        <div className="flex justify-between">
            <div className="relative w-1/2 md:w-[30%] h-48">
                <Image src="/logo.png" alt="Logo" fill />
            </div>
            <div className="w-1/2 md:w-[70%] px-4 md:px-10 m-auto">
                <h1 className="text-2xl md:text-4xl">INFORMASI</h1>
            </div>
        </div>
      </div>
    </>
  );
}

export default Informasi;
