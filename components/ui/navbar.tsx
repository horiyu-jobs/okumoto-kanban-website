import Link from 'next/link'

export interface routeObj {
  name: string;
  link: string;
}

export default function Navbar(props: { list: Array<routeObj>; }) {
  const data = props.list;

  return (
    <nav className='flex'>
      <div className='flex-none  sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1'>
        <Link href='/'>
          {/* <Image src='/images/logo.png' alt='logo' width={200} height={100} /> */}
          logo
        </Link>
      </div>
      <div className='flex-initial font-bold m-5'>
        <ul className='md:flex  hidden flex-initial text-left'>
          {data.map((value, index) => (
            <li key={index} className='p-4'>
              <Link href={value.link}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}