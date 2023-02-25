import Whatsapp from '../assets/whatsapp.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/Logo.svg';
import { CartDialog } from './dialogs/CartDialog';
import { useContext, useEffect } from 'react';
import MainContext from './context/MainContext';

export function Header() {

  const {value} = useContext(MainContext);
  
  return (
    <div className='flex justify-between w-screen bg-zinc-800 p-2'>
      <div className='flex gap-2 '>
        <img src={Whatsapp} className='w-8' />
        <img src={Instagram} className='w-8' />
      </div>
      <div>
        <img src={Logo} alt="Logo do app" className='w-12' />
      </div>
      <div className='p-2 my-2 rounded-lg  items-center bg-softWhite'>
        <CartDialog/>
        {
          value! > 0 && <div className='absolute right-[75px] top-10 flex items-center justify-center text-white w-8 h-8 bg-defaultRed rounded-full'>
          {value}
        </div>
        }
      </div>
    </div>
  )
}