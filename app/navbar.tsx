import Link from 'next/link';
import Image from 'next/image';
// import whatsapp from './whatsapp-white.png';

export default function Navbar() {
  return (
     <div className="h-20 sticky top-0 z-20 navbar bg-gray-700 text-white">
          <div className="navbar-start">
               <div className="w-30 flex items-center justify-center">
                    <Link href="/" className='w-full'>
                         <button className="btn btn-ghost w-full bg-gray-700 text-white hover:bg-white hover:text-black h-20">Icon</button>
                    </Link>
               </div>
               
          </div>
          <div className="navbar-center">
               <ul className="menu-horizontal flex items-center lg:flex hidden">
                    <li className="menu menu-lg h-20 justify-center">
                         <Link href="/" className="text-center hover:bg-gray-700 hover:text-cyan-400 duration-300">Home</Link>
                    </li>
                    <li className="menu menu-lg h-20 justify-center">
                         <Link href="/facilities" className="text-center hover:bg-gray-700 hover:text-cyan-400 text-xl"><b>Halls and Packages</b></Link>
                    </li>
                    <li className="menu menu-lg">
                         <Link href="/catalogue" className="text-center hover:bg-gray-700 hover:text-cyan-400 text-lg">Catalogue</Link>
                    </li>
                    <li className="menu menu-lg">
                         <Link href="/gallery" className="text-center hover:bg-gray-700 hover:text-cyan-400">Gallery</Link>
                    </li>
               </ul>
          </div>
          <div className="navbar-end h-full">
               {/* WhatsApp shortcut */}
               <div className='h-full hidden lg:flex pr-15 flex center items-center justify-center' >
                    <Link href="https://wa.me/60148033304" target="_blank">
                         <div className="h-16 w-auto px-2 group rounded-4xl flex center items-center justify-center bg-green-600 text-white-300 hover:text-green-600 hover:bg-white transition ease-in-out hover:duration-150 ">
                              <a aria-label="Chat on WhatsApp" className="w-auto px-3 flex items-center justify-center">
                              <div className="flex center items-center justify-center">     
                                   <Image className="flex group-hover:hidden transition ease-in duration-200 h-full" src={'/whatsapp/whatsapp-white.svg'} alt="on WhatsApp" width="50" height="50"></Image>
                                   <Image className="hidden group-hover:flex transition ease-in duration-200 h-full" src={'/whatsapp/whatsapp-green.svg'} alt="on WhatsApp" width="50" height="50"></Image>
                                   <div className='pl-3 flex w-9/10 h-10 items-center justify-center'>
                                        <b>WhatsApp Link</b>
                                   </div>
                              </div>
                              {/* <div className='w-9/10 h-10 items-center justify-center'>
                                   <b>WhatsApp Link</b>
                              </div> */}
                              </a>
                         </div>
                    </Link>
               </div>
               <div className="dropdown dropdown-end relative text-lg lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-700 text-white hover:bg-white hover:text-black pr-10 h-20">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         <li>
                              <Link href="/" className="text-center hover:bg-gray-700 hover:text-cyan-400 duration-300">Home</Link>
                         </li>
                         <li>
                              <Link href="/facilities" className="text-center hover:bg-gray-700 hover:text-cyan-400 text-lg"><b>Halls and Packages</b></Link>
                         </li>
                         <li>
                              <Link href="/catalogue" className="text-center hover:bg-gray-700 hover:text-cyan-400">Catalogue</Link>
                         </li>
                         <li>
                              <Link href="/gallery" className="text-center hover:bg-gray-700 hover:text-cyan-400">Gallery</Link>
                         </li>
                         {/* <li>
                         <Link href="/" className="text-center hover:bg-gray-700 hover:text-cyan-400 text-lg"><b>Dashboard</b></Link>
                         </li>
                         <li>
                         <Link href="/about" className="text-center hover:bg-gray-700 hover:text-cyan-400">About</Link>
                         </li>
                         <li>
                         <Link href="/contact" className="text-center hover:bg-gray-700 hover:text-cyan-400">Contact</Link>
                         </li> */}
                         <li>
                         <Link href="https://wa.me/60148033304" target='_blank' className="text-center bg-green-600 hover:bg-gray-700 hover:text-green-600">Chat on Whatsapp</Link>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
  )
}