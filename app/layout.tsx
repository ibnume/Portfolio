import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-two-xi-92.vercel.app/"),

  title: "Portfolio Mochammad Ibnu Abbas",
  authors: {
    name: "Ibnu",
  },

  description:
    "Based in Indonesia, I'm a front-end web developer. With a passion for creating intuitive and engaging user interfaces, and I'm dedicated to learning and mastering the latest web technologies.",
  openGraph: {
    title: "Portfolio Mochammad Ibnu Abbas",
    description:
      "Based in Indonesia, I'm a front-end web developer. With a passion for creating intuitive and engaging user interfaces, and I'm dedicated to learning and mastering the latest web technologies.",
    url: "https://portfolio-two-xi-92.vercel.app/",
    siteName: "MochammadIbnuAbbasPortfolio",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "ibnuabbas", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
