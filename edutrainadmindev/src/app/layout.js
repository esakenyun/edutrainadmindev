import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Edutrain Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
      </head>
      <body className={cairo.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
