import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import SeasonalGallery from '@/components/SeasonalGallery';
import Greenhouse from '@/components/Greenhouse';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/* Gärtnerei Weeber – Hauptseite (Single Page)
   Alle Sektionen werden nacheinander geladen mit Smooth-Scroll-Navigation */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <SeasonalGallery />
        <Greenhouse />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
