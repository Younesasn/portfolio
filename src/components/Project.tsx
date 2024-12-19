import { BentoCard, BentoGrid } from "./ui/bento-grid";
import Layout from "./Layout";

const features = [
  {
    name: "Quality Barber",
    description: "We automatically save your files as you type.",
    href: "https://quality-barber.vercel.app",
    cta: "Learn more",
    isWhite: false,
    className:
      "col-span-3 lg:col-span-1 bg-[url('/assets/quality.jpg')] bg-cover bg-center bg-no-repeat",
    background: <></>,
  },
  {
    name: "Power",
    description: "Get notified when something happens.",
    href: "https://power.you-dev.fr",
    isWhite: false,
    cta: "Learn more",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/assets/power.jpg')] bg-cover bg-center bg-no-repeat",
    background: <></>,
  },
  {
    name: "Hacka'Press",
    description: "Supports 100+ integrations and counting.",
    href: "https://hackapress.you-dev.fr",
    isWhite: true,
    cta: "Learn more",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/assets/hackapress.png')] bg-cover bg-center bg-no-repeat text-black",
    background: <></>,
  },
  {
    name: "Weather App",
    description: "Use the calendar to filter your files by date.",
    className:
      "col-span-3 lg:col-span-1 bg-[url('/assets/weather.png')] bg-cover bg-center bg-no-repeat text-black",
    href: "https://github.com/Younesasn/weather-app",
    isWhite: true,
    cta: "Learn more",
    background: <></>,
  },
];

export function Project() {
  return (
    <Layout className="flex-col items-baseline">
      <h2 className="mb-8 text-3xl font-medium">Projects</h2>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </Layout>
  );
}
