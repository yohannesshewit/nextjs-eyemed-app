import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "EyeMed Libary",
  description: "Build by Yohannes Taddesse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
