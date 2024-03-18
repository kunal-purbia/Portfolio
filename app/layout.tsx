import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Kunal Purbia",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{display: "flex", justifyContent: "center", alignItems:"center", height: "100vh"}}>{children}</body>
    </html>
  );
}
