import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Padmé and Anakin Wedding",
  description:
    "Everything you need to know about Padmé Amidala and Anakin Skywalker not-so-secret wedding event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
