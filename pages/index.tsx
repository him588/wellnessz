import Image from "next/image";
import { Inter } from "next/font/google";
import { News, Services, Topsection,Location,Fotter, Client } from "@/components/core";
import Package from "@/components/core/package";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <div className=" h-[100vh] w-full bg-yellow-100 overflow-x-hidden">
        <Topsection/>
        <Services/>
        <Package/>
        <Client/>
        <Location/>
        <News/>
        <Fotter/>
      </div>
      
    </main>
  );
}
