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

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app"
// };

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  console.log("=== params: ", { params, searchParams });

  return {
    title: "Zain"
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenuItems();
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Providers>
          <Navbar menu={menu} />
          <div className="flex flex-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
