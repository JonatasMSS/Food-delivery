
import { Hamburger } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

interface FoodProps {
    foodImage?: string;
    name: string;
    ingredients: Array<string> ;
    price: number;
    tastes: Array<string>;
    extras: Array<string>;
}


export function Food({ foodImage, name = "NO DATA IN TITLE AND INGREDIENTS", ingredients = [], price = 0.00, tastes, extras }: FoodProps) {
    return (
        <div className="flex items-center justify-between w-full bg-white rounded-lg border-2 border-zinc-400 my-3 p-2">

            {
                foodImage ?
                    <img src={foodImage} alt="Imagem da comida" className="w-16 h-16 rounded-lg"/> :
                    <div className='w-16 h-16 rounded-lg'>
                        <Hamburger weight='fill' size={'width:100%'} />
                    </div>
            }

            <div className='flex w-32 flex-col items-start'>
                <span className='font-roboto-condensed font-bold'>{name}</span>
                <span className='font-roboto-condensed text-sm'>
                    {
                       ingredients.map(ingredient => (
                        `| ${ingredient} `
                       ))
                    }
                </span>
            </div>

            <span className='font-roboto-condensed text-lg font-bold text-defaultRed '>RS {price.toFixed(2)}</span>
        </div>
    );
}