import Link from 'next/link';

export default function Navbar() {
  return (
     <div className="h-20 sticky top-0 z-20 navbar bg-gray-700 text-white">
          <div className="navbar-start right-full h-10/10">
               <Link href="/">
                    <button className="btn btn-ghost bg-gray-700 text-white hover:bg-white, text-black h-20">Icon</button>
               </Link>
          </div>
          <div className="navbar-center">
               <ul className="menu-horizontal flex items-center lg:flex hidden">
                    <li className="menu menu-lg">
                         <Link href="/" className="text-center hover:bg-gray-700 hover:text-cyan-400 hover:text-xl duration-300">Home</Link>
                    </li>
                    <li className="menu menu-lg">
                         <Link href="/catalogue" className="text-center hover:bg-gray-700 hover:text-cyan-400 hover:text-xl text-lg"><b>Catalogue</b></Link>
                    </li>
                    <li className="menu menu-lg">
                         <Link href="/facilities" className="text-center hover:bg-gray-700 hover:text-cyan-400 hover:text-xl">Halls and Packages</Link>
                    </li>
                    <li className="menu menu-lg">
                         <Link href="/gallery" className="text-center hover:bg-gray-700 hover:text-cyan-400 hover:text-xl">Gallery</Link>
                    </li>
               </ul>
          </div>
          <div className="navbar-end h-10/10">
               <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-700 text-white hover:bg-white hover:text-black right-50 h-20 lg:hidden">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden">
                    <li>
                    <Link href="/" className="text-center hover:bg-gray-700 hover:text-cyan-400 text-lg"><b>Dashboard</b></Link>
                    </li>
                    <li>
                    <Link href="/about" className="text-center hover:bg-gray-700 hover:text-cyan-400">About</Link>
                    </li>
                    <li>
                    <Link href="/contact" className="text-center hover:bg-gray-700 hover:text-cyan-400">Contact</Link>
                    </li>
               </ul>
               </div>
          </div>
     </div>
  )
}