import FeatureBento from "@/components/FeatureBento";
import LandingPage from "@/components/LandingPage";
import HowItWorks from "@/components/howitWorks";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <LandingPage />
    <FeatureBento />
    <HowItWorks/>
    <Footer/>
    </>
  );
}
