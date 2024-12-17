import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { DockMenu } from "@/components/DockMenu";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ASSANI Younes",
  description: "Portfolio of ASSANI Younes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${ubuntu.className} antialiased`}>
        {children}
        <DockMenu />
      </body>
    </html>
  );
}
