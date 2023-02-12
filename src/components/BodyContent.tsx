import { Food } from "./Food";
import Eu from '../assets/Eu.jpeg';
export function BodyContent(){
    return(
        <div className='bg-softWhite flex flex-col rounded-lg p-2 w-11/12'>
        <span
          className='font-roboto-condensed text-xl font-bold border-b-2 border-b-zinc-500'
        >
          Selecione o seu pedido

        </span>
        <Food 
          foodImage={Eu}
          name='Comida de teste'
          ingredients={['Coxinha','pastel','carne','frango']}
          price={8}
          extras={['Extra 1','Extra 2']}
          tastes={['Carne','Frango']}

        />
      </div>
    );
}