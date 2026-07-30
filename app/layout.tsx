import Navbar from "@/components/shared/navbar/Navbar";
import { cn } from "@/lib/utils";
import { getMe } from "@/service/getMe";
import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "GearUp - Home",
  description: "GearUp - Home",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getMe();

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        dmSans.variable,
        montserratHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" richColors />
        <Navbar user={user} />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
