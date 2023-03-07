'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Home() {
  const router = useRouter()
  const clickLogin = () => {
    router.push('/bantuan')
  }  
  return (
    <>
      <div className="max-w-screen md:max-w-[1024px] m-auto min-h-[90vh] md:min-h-screen relative">
        <div className="min-h-[91vh] md:min-h-[97vh] text-gray-600 m-auto grid place-items-center relative">
          <div className="relative w-full h-72 md:h-[100vh] cursor-pointer">
            <Image src="/2.png" fill alt="Home" />
          </div>
          <div className="absolute top-3 right-10 p-1 hover:bg-green-400 hover:rounded-md">            
            <Link href="/">Home</Link>
          </div>
          <div className="w-[200px] bg-white absolute top-3 left-10 p-2 shadow-md">            
            <div>
              Login
              <input
                type="text"
                className="border p-1 w-full"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="border p-1 w-full mt-1"
                placeholder="Password"
              />
            </div>
            <button
              data-modal-hide="defaultModal"
              type="button"
              onClick={clickLogin}
              class="mt-2 text-white bg-green-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
