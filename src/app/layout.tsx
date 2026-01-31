import "./globals.css";
import { ThemeProvider } from "../components/theam/theam-provider";
import { Inter } from "next/font/google";
import { Header } from "../components/header/index"; 
import { ReduxProvider } from "../store/redux-provider";
import { AuthLoader } from "../components/auth/auth-loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });  //Fonts import from google fonts


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} > {/* Applying font globally */}
        <ReduxProvider>
        <ThemeProvider>
          {/* <AuthLoader /> */}
          <Header/>
            <main>{children}</main>
        </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
