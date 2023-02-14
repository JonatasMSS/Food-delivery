
import { Hamburger } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

interface FoodProps {
    foodImage?: string;
    name: string;
    tastes: Array<string> ;
    price: number;
    
}


export function Food({ foodImage, name = "NO DATA IN TITLE AND INGREDIENTS", tastes = [], price = 0.00}: FoodProps) {
    return (
        <div className="flex items-center justify-between w-full bg-white rounded-lg border-2 border-zinc-400 my-3 p-2">

            {
                foodImage ?
                    <img src={foodImage} alt="Imagem da comida" className="w-16 h-16 rounded-lg"/> :
                    <div className='w-16 h-16 rounded-lg'>
                        <Hamburger weight='fill' size={'width:100%'} />
                    </div>
            }

            <div className='flex w-32 flex-col items-center'>
                <span className='font-roboto-condensed font-bold'>{name}</span>
                <span className='font-roboto-condensed w-48 truncate  text-sm'>
                    {
                       tastes.map(taste => (
                        `| ${taste} `
                       ))
                    }
                </span>
            </div>

            <span className='font-roboto-condensed text-lg font-bold text-defaultRed '>RS {price.toFixed(2)}</span>
        </div>
    );
}