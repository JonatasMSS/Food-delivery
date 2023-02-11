import Whatsapp from '../assets/whatsapp.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/Logo.svg';
import Carrinho from '../assets/shoppingcart.svg';
export function Header(){
    return(
        <div className='flex justify-between w-screen bg-zinc-800 p-2'>
          <div className='flex gap-2 '>
            <img src={Whatsapp} className='w-8'/>
            <img src={Instagram} className='w-8'/>
          </div>
          <div>
            <img src={Logo} alt="Logo do app" className='w-12'/>
          </div>
          <div className='flex gap-1 p-2 my-2 rounded-lg  items-center bg-softWhite'>
            <span className='font-roboto-condensed font-normal text-sm'>Carrinho</span>
            <img src={Carrinho} alt="Carrinho" className='w-5' />
          </div>
        </div>
    )
}