
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NKU Rover Team | Join the Mission",
  description:
    "Join Northern Kentucky University's University Rover Challenge team.",
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
