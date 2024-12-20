import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Layout from "./Layout";

export const Hero = () => {
  return (
    <Layout className="h-[400px]">
      <div>
        <div className="flex items-center space-x-4 text-xl font-bold">
          <Avatar className="size-14">
            <AvatarImage
              src="https://github.com/younesasn.png"
              alt="Avatar de Younes ASSANI"
            ></AvatarImage>
            <AvatarFallback>AY</AvatarFallback>
          </Avatar>
          <h2>ASSANI Younes</h2>
        </div>
        <div className="mt-5 space-y-4">
          <h2 className="text-balance bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Développeur Web
          </h2>
          <p className="sm:text-md text-balance from-white to-white/50 leading-none tracking-tighter md:text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            error exercitationem officia. Sint corporis vitae quo, quam porro
            architecto eius culpa harum in officiis facere, perferendis odio ad,
            aliquid laudantium?
          </p>
        </div>
      </div>
    </Layout>
  );
};
