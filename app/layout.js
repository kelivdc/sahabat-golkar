"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {  
  const router = useRouter()
  const [modal, setModal] = useState("hidden");
  const clickModal = () => {
    setModal(modal == "hidden" ? "" : "hidden");
  };

  const clickLogin = () => {
    setModal('hidden')
    router.push('/home')
  }
  return (
    <html lang="en">      
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>      
        {children}
        <div className={modal}>
          <div className="absolute w-full top-0 left-0 h-screen bg-gray-700 opacity-80 z-40" />
          <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full m-auto flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Login
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                    onClick={clickModal}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <input
                      type="text"
                      className="border p-1 w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="border p-1 w-full"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"                      
                      onClick={clickLogin}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </button>
                  <button
                    data-modal-hide="defaultModal"
                    type="button"
                    onClick={clickModal}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
