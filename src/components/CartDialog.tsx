
import * as Dialog from "@radix-ui/react-dialog";
import Carrinho from '../assets/shoppingcart.svg';
import { ArrowLeft, Hamburger,X } from 'phosphor-react';
export function CartDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="flex">
                <span className='font-roboto-condensed font-normal text-sm'>Carrinho</span>
                <img src={Carrinho} alt="Carrinho" className='w-5' />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/80 inset-0 fixed" />
                <Dialog.Content className="fixed rounded-lg  w-10/12 max-h-vh-90 bg-softWhite top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Dialog.Title className="bg-defaultBackground w-full text-white px-7 py-2 font-roboto-condensed font-bold text-xl">
                        <Dialog.Close className="relative inset-0 -left-5 top-1">
                            <ArrowLeft size={25} weight='bold' color='white' />
                        </Dialog.Close>
                        Carrinho

                    </Dialog.Title>

                    <div className="w-full max-h-full p-2 flex flex-col">
                        <div className=" flex w-full justify-between items-center gap-2 p-2 bg-white border-2 border-extraSoftGrey rounded-lg">
                            <div className='w-12 h-12 rounded-lg'>
                                <Hamburger weight='fill' size={'width:100%'} />
                            </div>
                            <span className="font-roboto-condensed font-bold ">Pastel de Frango</span>
                            <span className="font-roboto-condensed font-bold text-defaultOrange">R$ 00,00</span>
                            <button className="text-center bg-defaultRed p-2 rounded-full">
                                <X weight="bold" color="white"/>
                            </button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}