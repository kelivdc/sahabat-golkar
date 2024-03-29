'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()
  const clickLogin = () => {
    if ((email != 'sahabatgolkar') || (password != 'kotabogor')) {
      alert('Username atau password salah')
    } else {
      router.push('/bantuan')
    }
  }
  return (
    <>
      <div className="max-w-screen m-auto relative items-center grid place-content-center">
        <div className="min-h-[91vh] md:min-h-[97vh] text-gray-600 m-auto grid place-items-center relative">
            <img src="/2.png" className="object-fill h-screen" loading="lazy" />
          <div className="absolute top-3 right-10 p-1 hover:bg-green-400 hover:rounded-md">
            <Link href="/">Beranda</Link>
          </div>
          <div className="w-[200px] bg-green-600 absolute top-2 left-10 p-2 text-white font-bold rounded-md ">
            <div>
              Login
              <input
                type="text"
                className="p-1 w-full text-gray-600 mt-2 rounded-md  bg-white outline-none font-normal"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="border p-1 w-full mt-1 rounded-md text-gray-600 bg-white  outline-none font-normal"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              data-modal-hide="defaultModal"
              type="button"
              onClick={clickLogin}
              className="mt-2 text-white bg-green-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
