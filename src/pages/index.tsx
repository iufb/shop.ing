import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} container col gap-5`}>
      <Navbar />
      <Hero />
    </main>
  );
}
