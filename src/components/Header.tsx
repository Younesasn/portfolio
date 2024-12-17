import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-screen-lg items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <h1 className="font-semibold">@you-dev</h1>
      </div>
      <div className="flex space-x-4">
        <Link href={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Home</Link>
      </div>
    </header>
  );
};
