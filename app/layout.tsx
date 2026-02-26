import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CORP_NAME } from "@/lib/brand";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: CORP_NAME,
  description: `The official ${CORP_NAME} website`,
};

const inter = Inter();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
