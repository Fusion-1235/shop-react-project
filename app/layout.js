import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
