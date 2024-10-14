import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-8">
      <div className="flex space-x-3 items-center">
        <h1 className="">@you-dev</h1>
      </div>
      <div className="flex space-x-4">
        <Link href={"/"} >Home</Link>
        <Link href={"/"} >Home</Link>
        <Link href={"/"} >Home</Link>
      </div>
    </header>
  );
};
