import Image from "next/image";
import { Inter } from "next/font/google";
import { Services, Topsection } from "@/components/core";
import Package from "@/components/core/package";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <div className=" h-[100vh] w-full bg-yellow-100">
        <Topsection/>
        <Services/>
        <Package/>
      </div>
      
    </main>
  );
}
