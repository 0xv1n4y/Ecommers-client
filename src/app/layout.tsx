import "./globals.css";
import { ThemeProvider } from "../components/theam/theam-provider";
import { Inter } from "next/font/google";
import { Header } from "../components/header/index"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });  //Fonts import from google fonts


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} > {/* Applying font globally */}
        <ThemeProvider>
          <Header/>
            <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
