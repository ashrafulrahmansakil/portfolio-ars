import Navbar from '../Navbar/Navbar';
import ThemeToggle from './../Button/ThemToggle';
import ScrollProgressBar from './../ScrollBar/ScrollBar';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <>
      <div className=' bg-transparent shadow-md sticky top-0 w-full z-50 border-slate-900 dark:border-slate-100 backdrop-blur-md'>
        <div className='container mx-auto py-4 flex justify-between items-center'>
          <h1 className='text-xl rounded-md dark:text-white font-bold bg-gradient-to-r dark:from-[#7c3aed] to-[#06b6d4] px-2 mx-1 py-1'>

            <HashLink to="#home">
              ARS
            </HashLink>
          </h1>
          <div className='flex gap-2 items-center px-1'>
            <Navbar />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <ScrollProgressBar />
    </>
  )
}
