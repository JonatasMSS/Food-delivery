import { Food } from "./Food";
import { FoodDialog } from "./FoodDialog";

export function BodyContent(){

    

    return(
        <div className='bg-softWhite my-6 flex flex-col rounded-lg p-2 w-11/12'>
        <span
          className='font-roboto-condensed text-xl font-bold border-b-2 border-b-zinc-500'
        >
          Selecione o seu pedido

        </span>

        <FoodDialog/>
    
        
      </div>
    );
}