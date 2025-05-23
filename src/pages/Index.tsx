import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeatureBanner from "@/components/FeatureBanner";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <FeatureBanner />
      <Services />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
