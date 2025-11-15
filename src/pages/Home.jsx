import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import Mindset from "../sections/Mindset.jsx"; // NEW — replaces Pricing.jsx

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Mindset />   {/* ← New section */}
    </>
  );
}
