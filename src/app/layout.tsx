import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@wallavi/ui/style'
import { ChatButton } from '@/components/chat/chat-button'
import { AI } from './actions';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingButton } from "@/components/floating-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Tortoise",
  description: "Hostel - San Francisco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Green Tortoise - Hostel - San Francisco</title>
      </head>
      <body className={`min-h-dvh`}>
        <Header />
        {children}
        <AI>
          <ChatButton />
        </AI>
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
