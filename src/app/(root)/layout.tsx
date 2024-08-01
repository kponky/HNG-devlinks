import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "../globals.css";
import Image from "next/image";
import { Loader } from "lucide-react";

export const metadata: Metadata = {
  title: "Link Sharing App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#633CFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Toaster position="top-right" richColors theme="system" closeButton />
        <Suspense fallback={<Loader />}>
          <div className="md:bg-gray-50 bg-white min-h-screen">
            <div className="w-full bg-gray-50 md:py-6">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-white md:rounded-xl">
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/devlinks.png"
                    alt="solar link cirlce"
                    loading="lazy"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <p className="font-bold md:text-[28px] text-[24px]">
                    devlinks
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl md:shadow-sm md:w-[500px] w-full md:px-10 px-5 md:py-10 py-3 mt-[50px] mx-auto">
              {children}
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}