
import { Hamburger, X, ArrowDown } from 'phosphor-react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';


export function CartFoodContainer({ foodImage, name, price, tastes, onRemoveClicked}: CardFoodContainerProps) {

    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <Collapsible.Root open={open} onOpenChange={setOpen} className='flex flex-col' >
            <div className=" z-10 flex w-full justify-between items-center gap-2 p-2 bg-white border-2 border-extraSoftGrey rounded-lg">

                {
                    foodImage ? <img src={foodImage} className='w-12 h-12' /> :
                        <div className='w-12 h-12 rounded-lg'>
                            <Hamburger weight='fill' size={42} />
                        </div>
                }
                <span className="font-roboto-condensed font-bold ">{name}</span>
                <span className="font-roboto-condensed font-bold text-defaultOrange">R$ {price.toFixed(2)}</span>
                <button 
                onClick={() => onRemoveClicked}
                className="text-center bg-defaultRed p-2 rounded-full">
                    <X weight="bold" color="white" />
                </button>
                <Collapsible.Trigger asChild>
                    <button className='text-center bg-softGrey p-2 rounded-full'>
                        <ArrowDown weight='bold' color='white' />
                    </button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content className='flex flex-col bg-zinc-400/50 rounded-b-lg z-0 relative inset-0 -top-3 p-2 '>
                <span className='font-roboto-condensed font-bold border-b-2 border-zinc-700'>Sabores | Acompanhamentos selecionados</span>
                <div className=' grid grid-cols-3 grid-flow-row'>
                    {
                        tastes.map((taste,index) => (
                            <span key={index} className='font-roboto-condensed font-bold'> {taste} </span>
                        ))
                    }
                </div>
            </Collapsible.Content>

        </Collapsible.Root>
    )
}