import { NavLink, Outlet } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/20/solid';


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <header className="flex justify-between items-center sticky top-0 bg-slate-800">
        <Bars3Icon className='block md:hidden w-12 px-2 text-sky-500' />

        <div className=" px-4 py-4">
          <h1 className=" border-l-4 border-b-4 border-sky-500 px-1 text-2xl font-mono font-bold text-cyan-500"><span className='text-3xl'>C</span>oinScreener</h1>
        </div>
        <nav className='hidden md:flex font-thin px-4 py-2 gap-x-2 '>
          <NavLink to={"/"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>Home</NavLink>
          <NavLink to={"/coins"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>Market</NavLink>
          <NavLink to={"/news"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>News</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-sky-500' : ''} `}>About</NavLink>

        </nav>

        <div className='px-4 flex items-center'>
          <UserIcon className='w-8 rounded-full bg-sky-500 p-2' /><span className='font-mono px-2 lg:block hidden '>Username</span>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-4">
        <Outlet />
      </main>
      <footer className="">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} My App</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
