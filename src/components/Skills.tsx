import Image from "next/image";
import Layout from "./Layout";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const reviews = [
  {
    id: 1,
    img: (
      <Image src="/assets/angular.svg" alt="Angular" width={295} height={0} />
    ),
  },
  {
    id: 2,
    img: (
      <Image
        src="/assets/tailwindcss.svg"
        alt="Tailwind CSS"
        width={472}
        height={0}
      />
    ),
  },
  {
    id: 3,
    img: (
      <Image src="/assets/symfony.png" alt="Symfony" width={349} height={0} />
    ),
  },
  {
    id: 4,
    img: <Image src="/assets/php.svg" alt="Php" width={110} height={0} />,
  },
  {
    id: 5,
    img: (
      <Image
        src="/assets/typescript.svg"
        alt="Typescript"
        width={290}
        height={0}
      />
    ),
  },
  {
    id: 6,
    img: <Image src="/assets/mysql.svg" alt="Mysql" width={140} height={0} />,
  },
];

const ReviewCard = ({ img }: { img: ReactNode }) => {
  return (
    <figure className={cn("relative w-auto overflow-hidden p-4")}>
      <div className="mt-2 text-sm">{img}</div>
    </figure>
  );
};

export const Skills = () => {
  return (
    <Layout>
      {/* <h2 className="mb-8 text-3xl font-medium">Skills</h2> */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:15s]">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black md:from-[#0a0e0e]"></div>
      </div>
    </Layout>
  );
};
