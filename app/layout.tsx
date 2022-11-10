import '../styles/globals.css'
import Navbar from '../components/ui/navbar';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>オクモト看板</title>
        <meta name="description" content="Signboard maker" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer className="flex h-24 w-full items-center justify-center border-t">
          ©  奥本看板 All rIghts reserved.
        </footer>
      </body>
    </html>
  );
}