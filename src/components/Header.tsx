import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto flex items-center justify-between py-4 px-8">
      <div className="flex items-center">
        <h1 className="font-semibold">@you-dev</h1>
      </div>
      <div className="flex space-x-4">
        <Link href={"/"} className="cursor-pointer">Home</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Home</Link>
      </div>
    </header>
  );
};
