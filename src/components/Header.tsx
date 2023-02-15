import Whatsapp from '../assets/whatsapp.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/Logo.svg';
import { CartDialog } from './dialogs/CartDialog';

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
          <div className='p-2 my-2 rounded-lg  items-center bg-softWhite'>
            <CartDialog
              foodsToOrder={
                [
                  {
                    name:'Pastel frito na hora',
                    price:8.00,
                    tastes:['Frango','Catupiry','Calabresa','Cheddar']


                  },
                  {
                    name:'Sanduiches',
                    price:28.00,
                    tastes:['X-misto','X-Bacon','X-Calabresa','X-Cheddar']
                    

                  }
                ]
              }
            />
          </div>
        </div>
    )
}