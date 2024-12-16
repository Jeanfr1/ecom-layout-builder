import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopDeals from "@/components/TopDeals";
import BestSellers from "@/components/BestSellers";
import WhyUs from "@/components/WhyUs";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1115]">
      <Navbar />
      <Hero />
      <TopDeals />
      <BestSellers />
      <WhyUs />
      <Categories />
      <div className="container mx-auto px-4 py-20">
        <Newsletter />
      </div>
    </div>
  );
};

export default Index;