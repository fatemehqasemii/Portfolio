import "./globals.css";
import Header from "./_components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Header />
        {children}
      </body>
    </html>
  );
}
