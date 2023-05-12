import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <header className="flex flex-col md:flex-row justify-between w-full p-2">
        <div className="flex justify-between p-2">
          <h2 className='text-3xl font-mono border-b-4 border-sky-600'>COINSCREEN</h2>
          <button name="menubtn" className='md:hidden block ' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
            {!isMenuOpen ? <Bars3Icon className='w-6' /> :
              <XMarkIcon className='w-6' />
            }
          </button>
        </div>

        <nav className={`p-3 font-mono text-lg md:flex items-center ${isMenuOpen ? 'flex flex-col' : 'hidden'} `}>
          <NavLink to={"/"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>Home</NavLink>
          <NavLink to={"/coins"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>Market</NavLink>
          <NavLink to={"/watchlist"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>Watchlist</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>About</NavLink>

        </nav>
        <div></div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-4">
        <Outlet />
      </main>
      <footer className="">
        <div className="container mx-auto px-4 py-4">
        </div>
      </footer>
    </div>
  );
};

export default Layout;
