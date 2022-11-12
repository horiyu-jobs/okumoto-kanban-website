import '../styles/globals.css'
import Navbar from '../components/ui/navbar';
import { routeObj } from '../components/ui/navbar';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {

  const navbarList: Array<routeObj> = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'News',
      link: '/news',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <html lang="ja">
      <head>
        <title>オクモト看板</title>
        <meta name="description" content="Signboard maker" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <Navbar list={navbarList} />
        </header>
        {children}
        <footer className="flex h-24 w-full items-center justify-center border-t">
          © オクモト看板 All rIghts reserved.
        </footer>
      </body>
    </html>
  );
}