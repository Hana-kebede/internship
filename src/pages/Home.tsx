import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero id="home" />
  {/* API Connection Test removed */}
      <Process />
      <Products />
      <Reviews />
      <Partners />
      <Footer />
    </>
  );
};

export default Home; 