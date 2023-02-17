
import * as Dialog from "@radix-ui/react-dialog";
import Carrinho from '../../assets/shoppingcart.svg';
import BlackCarrinho from '../../assets/shoppingcart-black.svg';
import { ArrowLeft, } from 'phosphor-react';
import { CartFoodContainer } from "../CartFoodContainer";
import { useEffect, useState } from "react";
import { FoodToOrder } from "../../models/foodModel";
import { LocalStorageController } from "../../data/localDataStorageController";




export function CartDialog() {
    

    const FoodsCartInStorage = new LocalStorageController();
    const FoodInStorage = FoodsCartInStorage.getDataFromStorage('foods');

    

    const [foodsInCart,setFoodsInCart] = useState(FoodInStorage);
    
    useEffect(()=>{
        setFoodsInCart(FoodInStorage);
    },[])



    return (
        <Dialog.Root>
            <Dialog.Trigger className="flex">
                <span className='font-roboto-condensed font-normal text-sm'>Carrinho</span>
                <img src={Carrinho} alt="Carrinho" className='w-5' />
            </Dialog.Trigger>
            <Dialog.Portal >
                <Dialog.Overlay className="bg-black/80 inset-0 fixed" />
                <Dialog.Content className="fixed rounded-lg  w-[95%]  bg-softWhite top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Dialog.Title className="bg-defaultBackground w-full text-white px-7 py-2 font-roboto-condensed font-bold text-xl">
                        <Dialog.Close className="relative inset-0 -left-5 top-1">
                            <ArrowLeft size={25} weight='bold' color='white' />
                        </Dialog.Close>
                        Carrinho

                    </Dialog.Title>

                    <div className="w-full  pt-5 pb-20 px-2 flex flex-col max-h-vh-90 overflow-auto">
                        {
                            
                            foodsInCart ? 
                            foodsInCart.map((food,index) => (
                                <CartFoodContainer
                                key={index}
                                    name={food.name}
                                    price={food.totalPrice}
                                    tastes={food.tastes}
                                    onRemoveClicked={()=> {}}

                                />
                            )):
                            <span className="font-roboto-condensed font-bold text-center">Nenhum pedido no carrinho</span>
                        }

                    </div>
                    <div className="absolute inset-0 top-[90%] z-10 rounded-b-lg bg-white h-fit flex w-full justify-between items-center p-2">
                        <span className="font-roboto-condensed font-bold text-xl">Valor total: RS 00,00</span>
                        <button className="flex bg-softGreen p-2 rounded-lg items-center gap-2">
                            <span className="font-roboto-condensed ">Confirmar pedido</span>
                            <img src={BlackCarrinho} alt="Carrinho" className="w-[20px]"/>
                        </button>
                        
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}