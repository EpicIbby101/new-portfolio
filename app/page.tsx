import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ArtworkShowcase from '@/components/ArtworkShowcase';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <ArtworkShowcase />
        {/* <FAQ /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}