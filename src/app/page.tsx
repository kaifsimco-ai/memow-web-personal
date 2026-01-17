import Navbar from "@/components/Layouts/Navbar";
import Header from "./home/components/Header";
import Services from "./home/components/Services";
import Divider from "@/components/Layouts/Divider";
import HaveitPartnerCard from "./home/components/MemowPartnerCard";
import Footer from "@/components/Layouts/Footer";
import BookEvent from "./home/components/BookEvent";
import FAQ from "./home/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <section className="w-[95%] mt-10">
        <Header />
        <Services />
        <Divider style="h-[120px] w-full" />
        <BookEvent />
        <Divider style="h-[120px] w-full" />
        <HaveitPartnerCard />
        <Divider style="h-[120px] w-full" />
        <FAQ />
        <Footer />
      </section>
      {/* <CommingSoon /> */}
    </main>
  );
}
