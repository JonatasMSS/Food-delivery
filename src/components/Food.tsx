
import { Hamburger } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { CartDialog } from "./dialogs/CartDialog";

import clsx from 'clsx';



export function Food({ foodImage,showPrice = false,name = "NO DATA IN TITLE AND INGREDIENTS", price = 0.00,description}: FoodContainerProps) {
    return (
        <div className={clsx("flex items-center w-full bg-white rounded-lg border-2 border-zinc-400 my-3 p-2",{
            'justify-between': showPrice,
            'justify-start gap-14': !showPrice,

        })} >

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
                    {description}
                </span>
            </div>

            {
                showPrice && <span className='font-roboto-condensed text-lg font-bold text-defaultRed '>RS {price.toFixed(2)}</span>
            }
        </div>
    );
}