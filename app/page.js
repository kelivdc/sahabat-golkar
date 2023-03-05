import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="center">
      <div className="max-w-screen-lg m-auto border-4 md:border-8 border-red-500 bg-blue-400 min-h-[92vh] md:min-h-[99vh]">
        <div className="bg-yellow-400 rounded-[50px] md:rounded-[105px] min-h-[91vh] md:min-h-[97vh] p-8 text-gray-600">
          Eiusmod non occaecat exercitation irure excepteur exercitation dolore
          pariatur ipsum. Duis sint consectetur nisi quis nulla enim nisi est
          amet eiusmod aute sit. Est ad officia minim deserunt labore est sint.
          Non veniam eu officia ad ea enim et. Ipsum sint ea anim irure ut
          excepteur deserunt reprehenderit excepteur mollit ipsum. Tempor aute
          proident duis ea id consectetur proident pariatur fugiat qui amet ex
          aliqua. Voluptate anim et mollit esse nulla incididunt. Culpa id minim
          sint ut minim deserunt cupidatat magna amet tempor cillum sit. Veniam
          consequat veniam aliquip velit. Nisi consectetur excepteur aliqua ad
          laboris nostrud quis ut magna tempor quis nisi occaecat. 
        </div>
      </div>      
    </div>
  );
}
