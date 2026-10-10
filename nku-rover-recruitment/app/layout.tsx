
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NKU Rover Team | Join the Mission",
  description:
    "Join Northern Kentucky University's University Rover Challenge team. Build, code, and engineer the next generation of planetary exploration rovers.",
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
