import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import Layout from "./Layout";
import Image from "next/image";

const features = [
  {
    Icon: FileTextIcon,
    name: "Hacka'Press",
    description: "We automatically save your files as you type.",
    href: "https://hackapress.you-dev.fr",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 text-black",
    background: (
      <Image
        src="/assets/chaise.webp"
        alt="Chaise"
        className="h-full w-full object-cover"
        width={400}
        height={400}
      />
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <></>,
  },
];

export function Project() {
  return (
    <Layout>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </Layout>
  );
}
