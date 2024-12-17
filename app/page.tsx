import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <Header />
      <Hero />
      <Project />
      <Footer />
    </BackgroundGradientAnimation>
  );
}
