
import { Hamburger, X, ArrowDown } from 'phosphor-react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

interface CardFoodContainerProps {
    foodImage?: string;
    name: string;
    price: number;
}



export function CartFoodContainer() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Collapsible.Root open={open} onOpenChange={setOpen} className='flex flex-col' >
            <div className=" z-10 flex w-full justify-between items-center gap-2 p-2 bg-white border-2 border-extraSoftGrey rounded-lg">

                <div className='w-12 h-12 rounded-lg'>
                    <Hamburger weight='fill' size={42}/>
                </div>
                <span className="font-roboto-condensed font-bold ">Pastel frito na hora</span>
                <span className="font-roboto-condensed font-bold text-defaultOrange">R$ 2.50</span>
                <button className="text-center bg-defaultRed p-2 rounded-full">
                    <X weight="bold" color="white" />
                </button>
                <Collapsible.Trigger asChild>
                    <button className='text-center bg-softGrey p-2 rounded-full'>
                        <ArrowDown weight='bold' color='white' />
                    </button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content className='flex flex-col bg-zinc-400/50 rounded-b-lg z-0 relative inset-0 -top-3 p-2 '>
                <span className='font-roboto-condensed font-bold border-b-2 border-zinc-700'>Sabores selecionados</span>
                <div className=' grid grid-cols-3 grid-flow-row'>
                   <span className='font-roboto-condensed font-bold'> Frango</span>
                   <span className='font-roboto-condensed font-bold'> Catupiry</span>
                   <span className='font-roboto-condensed font-bold'> Calabresa</span>
                </div>
            </Collapsible.Content>

        </Collapsible.Root>
    )
}