import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import About from '@/components/About';
import Counter from '@/components/Counter';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA2 from '@/components/CTA2';
import MedicalTabs from '@/components/MedicalTabs';
import ContactForm from '@/components/ContactForm';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CTA />
      <About />
      <Counter />
      <Services />
      <Projects />
      <WhyChooseUs />
      <CTA2 />
      <MedicalTabs />
      <ContactForm />
      {/* <Blog /> */}
      <Footer />

      {/* Scroll Up Button */}
      <span className="cs_scrollup">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
        </svg>
      </span>
    </main>
  );
}
