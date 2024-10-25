"use client";
import { Dock, DockIcon } from "./ui/dock";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockMenu() {
  return (
    <div className="absolute z-10 top-[88%] left-0 right-0">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-white/10 px-3" link="https://github.com/younesasn">
          <Icons.gitHub className="size-full" />
        </DockIcon>
        <DockIcon className="bg-white/10 px-3" link="https://www.linkedin.com/in/younesassani/">
          <Icons.linkedIn className="size-full" />
        </DockIcon>
        <DockIcon className="bg-white/10 px-3" link="mailto:younesassani@gmail.com">
          <Icons.mail className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <GithubIcon {...props} />
  ),
  linkedIn: (props: IconProps) => (<LinkedinIcon {...props} />),
  mail: (props: IconProps) => (<MailIcon {...props} />),
};