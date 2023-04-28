import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components";
import { WithLayout } from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className={`${inter.className} container col gap-5 `}>
      <Hero />
    </main>
  );
}
export default WithLayout(Home);
