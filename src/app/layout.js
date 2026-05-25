import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Edutrain Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
