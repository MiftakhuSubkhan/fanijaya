import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import BookingEstimator from "@/components/BookingEstimator";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import ContactFooter from "@/components/ContactFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <Fleet />
        <Services />
        <BookingEstimator />
        <Testimonials />
        <LocationSection />
      </main>

      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
