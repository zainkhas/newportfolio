import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { getMenuItems } from "@/datahelpers/getMenuItems";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenuItems();
  return (
    <html lang="en" className="dark">
      <body className={plusJakartaSans.className}>
        <Providers>
          <Navbar menu={menu} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
