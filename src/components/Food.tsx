import Eu from '../assets/Eu.jpeg';
import { Hamburger } from "phosphor-react";

export function Food() {
    return (
        <div className="flex items-center justify-between w-full bg-white rounded-lg border-2 border-zinc-400 my-3 p-2">

            <div className='w-16 h-16 rounded-lg'>
                <Hamburger weight='fill' size={'wid'} />
            </div>

            <div className='flex w-32 flex-col items-start'>
                <span className='font-roboto-condensed font-bold'>Pastel de carne</span>
                <span className='font-roboto-condensed text-sm'>Ingredientes por aqui...</span>
            </div>

            <span className='font-roboto-condensed text-lg font-bold text-defaultRed '>RS 00,00</span>
        </div>
    );
}