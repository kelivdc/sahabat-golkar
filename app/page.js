"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sahabat Golkar</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="max-w-screen m-auto relative items-center grid place-content-center">
        <img
          src="/1.png"
          className="object-fill h-screen cursor-pointer"
          onClick={() => router.push("/home")}
          loading="lazy"
        />
      </div>
    </>
  );
}
