import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import SideBar from "./_components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1f2428] min-h-screen flex flex-col">
        <Header />
        <main className=" ">{children}</main>
        <SideBar />
        <Footer />
      </body>
    </html>
  );
}
