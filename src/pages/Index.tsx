import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import IsThisYou from "@/components/landing/IsThisYou";
import WhyOverloaded from "@/components/landing/WhyOverloaded";
import HowItHelps from "@/components/landing/HowItHelps";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Overwhelm Navigator — Finally Finish What Matters with AI-Powered Clarity</title>
        <meta 
          name="description" 
          content="Stop drowning in tabs, tools, and AI chats. Overwhelm Navigator is a guided system + AI copilot that cuts through cognitive overload so you can do deep, meaningful work without burning out." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://overwhelmnavigator.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Overwhelm Navigator — Finally Finish What Matters" />
        <meta property="og:description" content="A guided system + AI copilot that cuts through cognitive overload so you can do your best work without burning out." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://overwhelmnavigator.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Overwhelm Navigator — Finally Finish What Matters" />
        <meta name="twitter:description" content="A guided system + AI copilot that cuts through cognitive overload so you can do your best work without burning out." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <IsThisYou />
          <WhyOverloaded />
          <HowItHelps />
          <HowItWorks />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
