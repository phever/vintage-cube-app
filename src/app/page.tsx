import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Prizes from "@/components/Prizes";
import Schedule from "@/components/Schedule";
import Format from "@/components/Format";
import CtaBanner from "@/components/CtaBanner";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Prizes />
        <Schedule />
        <Format />
        <CtaBanner />
        <Venue />
      </main>
      <Footer />
    </>
  );
}
