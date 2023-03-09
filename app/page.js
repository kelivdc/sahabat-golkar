'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <>      
    <Head>
      <title>Sahabat Golkar</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
      <div className="max-w-screen md:max-w-[1024px] m-auto min-h-[90vh] md:min-h-screen relative">
        <div className="rounded-[50px] md:rounded-[105px] min-h-[91vh] md:min-h-[97vh] text-gray-600 m-auto grid place-items-center">
          <div className="relative w-full h-72 md:h-[100vh] cursor-pointer" onClick={() => router.push('/home')}>
            <Image src="/1.png" fill alt="Logo" />
          </div>
        </div>
        {/* <div className="relative w-full h-72 md:h-[100vh]">
          <Image src="/2.png" fill alt="Mari Berkarya" />
        </div> */}
      </div>
    </>
  );
}
