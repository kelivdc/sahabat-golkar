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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="m-auto relative min-h-screen md:max-w-[85vw] bg-gradient-to-b from-white to-yellow-300">
        <div className="pt-5">
          <Image src="/logo-white-blur2.png" fill />
          <Link href="/home">
            <div className="items-center mx-auto z-30 hover:invert-[.25] hover:cursor-pointer relative w-[250px] h-[200px]">
              <Image src="/logo.png" layout="cover" width={250} height={200} />
            </div>
          </Link>
        </div>
        <div className="z-20 flex space-x-2 justify-between w-full py-5 relative h-[465px]">
          <Image src="/3orang.png" fill />
        </div>
          {/* <div className="z-20">
            <Image src="/photo1.png" width={300} height={300} />
            <div className="bg-green-800 text-white w-full p-3 rounded-xl text-center">
              <div className="text-xl">
                Dr. TB ACE HASAN
                <br />
                SYADZILY
              </div>
              <div className="">Ketua Partai Golkar Jawa Barat</div>
            </div>
          </div>
          <div className="z-30">
            <Image src="/photo2.png" width={375} height={375} />
            <div className="bg-green-800 text-white w-full p-3 rounded-xl text-center">
              <div className="text-xl">
                Ir. AIRLANGGA
                <br />
                HARTARTO
              </div>
              <div className="">Ketua Umum Partai Golkar</div>
            </div>
          </div>
          <div className="z-30">
            <Image src="/photo3.png" width={292} height={250} />
            <div className="bg-green-800 text-white w-full p-3 rounded-xl text-center">
              <div className="text-xl">
                M.RUSLI
                <br />
                PRIHATEVY, S.E., M.Si
              </div>
              <div className="">Ketua Partai Golkar Kota Bogor</div>
            </div>
          </div> */}

      </div>
    </>
  );
}
