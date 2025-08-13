import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HelpCenter from "@/components/HelpCenter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero id="home" />
        <Services id="services" />
      <Products />
        <About id="about" />
      <Process />
      <Reviews />
      <Partners />
        <Contact id="contact" />
      </main>
      <Footer />
      <HelpCenter />
    </div>
  );
};

export default Index;
