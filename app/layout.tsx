import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yashitha Sahan",
  description: "A personal portfolio - Yashitha Sahan. Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen justify-between bg-red-300">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
