import './globals.css';
import ClientWrapper from '@/app/components/ClientWrapper';
import localFont from "next/font/local";
import "@fontsource/vazirmatn/400.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
