import '/src/App.css'
import { useState, useEffect } from 'react';
import Image from '../atoms/Image.jsx';
const Header = () => {
       const [scrolled, setScrolled] = useState(false);
       useEffect(() => {
              const onScroll = () => {
                     setScrolled(window.scrollY > 50);  // threshold, adjust as you want
              };
              window.addEventListener("scroll", onScroll);
              return () => window.removeEventListener("scroll", onScroll);
       }, []);
       return (
              <nav
                     className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled ? "navbar-scrolled" : "bg-transparent"
                            }`}
              >

                     <div className="flex flex-wrap items-center justify-between py-2 my-5 mx-5 lg:mx-20">
                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                   <Image
                                          src="/src/assets/images/logo.png"
                                          className="h-12"
                                          alt="Surf Camp Logo"
                                          draggable="false"
                                   />
                                   <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                          Surf Camp
                                   </span>
                            </a>

                            <button
                                   data-collapse-toggle="navbar-default"
                                   type="button"
                                   className="inline-flex items-center p-2 w-10 h-12 justify-center text-sm text-white rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-0"
                                   aria-controls="navbar-default"
                                   aria-expanded="false"
                            >
                                   <span className="sr-only">Open main menu</span>
                                   <svg
                                          className="w-5 h-12"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 17 14"
                                   >
                                          <path
                                                 stroke="currentColor"
                                                 strokeLinecap="round"
                                                 strokeLinejoin="round"
                                                 strokeWidth="2"
                                                 d="M1 1h15M1 7h15M1 13h15"
                                          />
                                   </svg>
                            </button>

                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                   <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 bg-transparent">
                                          {['Home', 'Camp Life', 'Surf Lessons', 'Packages', 'Book Now'].map((item) => (
                                                 <li key={item}>
                                                        <a
                                                               href="#"
                                                               className="block py-2 px-3 text-white hover:text-cyan-200 transition duration-300  md:p-0"
                                                        >
                                                               {item}
                                                        </a>
                                                 </li>
                                          ))}
                                   </ul>
                            </div>
                     </div>
              </nav>
       );
};

export default Header;
