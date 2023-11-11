import { Providers } from "@/components/providers";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";

import { cn } from "@tr/ui/utils";

import { ThemeToggle } from "@/components/providers/theme-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hacker news | asobirov",
  description: "Hacker news client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(["font-sans", poppins.variable].join(" "), "container")}
      >
        <ThemeToggle />
        <Providers headers={headers()}>{children}</Providers>
      </body>
    </html>
  );
}
