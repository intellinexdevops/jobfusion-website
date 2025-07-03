export const experimental_ppr = true;
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/config/react-query/ReactQueryProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { getLocale } from "next-intl/server";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | JobFusion",
    default: "JobFusion",
  },
  description: "Create, Build, Achieve",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            {children}
            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
        <Script src="https://www.google.com/recaptcha/api.js"></Script>
      </body>
    </html>
  );
}
