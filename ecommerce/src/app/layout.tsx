import Head from "./components/head";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <Head />
        <body className="bg-gray-100 font-geist-sans font-geist-mono">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
