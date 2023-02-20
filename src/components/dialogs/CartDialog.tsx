
import * as Dialog from "@radix-ui/react-dialog";
import Carrinho from '../../assets/shoppingcart.svg';
import BlackCarrinho from '../../assets/shoppingcart-black.svg';
import { ArrowLeft, } from 'phosphor-react';
import { CartFoodContainer } from "../CartFoodContainer";
import { useEffect, useState } from "react";
import { FoodToOrder } from "../../models/foodModel";
import { LocalStorageController } from "../../data/localDataStorageController";
import { PersonAddressDialog } from "./PersonAddressDialog";

export function CartDialog() {




    const localDataStorage = new LocalStorageController();
    const [foodsInCart, setFoodsInCart] = useState<FoodToOrder[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isPersonDialogOpen, setPersonDialogOpen] = useState<boolean>(false);


    function whenDialogIsOpen() {

        isOpen ? setIsOpen(false) : setIsOpen(true)
        const allFoodsInCart = localDataStorage.getDataFromStorage('foods');
        setFoodsInCart(allFoodsInCart ?? []);
        const sumOfFoodsPrices = allFoodsInCart?.map(food => food.totalPrice).reduce((prev, next) => prev + next, 0);
        setTotalValue(sumOfFoodsPrices ?? 0);


    }

    function removeFoodFromCart(index: number) {

        localDataStorage.removeDataFromStorage('foods', index);
        const allFoods = localDataStorage.getDataFromStorage('foods');
        const sumOfFoodsPrices = allFoods?.map(food => food.totalPrice).reduce((prev, next) => prev + next, 0);
        setTotalValue(sumOfFoodsPrices ?? 0);
        setFoodsInCart(allFoods ?? []);

    }



    return (
        <>
            <Dialog.Root

                onOpenChange={whenDialogIsOpen}
                open={isOpen}
            >
                <Dialog.Trigger className="flex">
                    <span className='font-roboto-condensed font-normal text-sm'>Carrinho</span>
                    <img src={Carrinho} alt="Carrinho" className='w-5' />
                </Dialog.Trigger>
                <Dialog.Portal

                >
                    <Dialog.Overlay className="bg-black/80 inset-0 fixed" />
                    <Dialog.Content className="fixed rounded-lg  w-[95%]  bg-softWhite top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Title className="bg-defaultBackground w-full text-white px-7 py-2 font-roboto-condensed font-bold text-xl">
                            <Dialog.Close
                                onClick={() => { setIsOpen(false) }}
                                className="relative inset-0 -left-5 top-1">
                                <ArrowLeft size={25} weight='bold' color='white' />
                            </Dialog.Close>
                            Carrinho

                        </Dialog.Title>

                        <div className="w-full  pt-5 pb-20 px-2 flex flex-col max-h-vh-90 overflow-auto">
                            {

                                foodsInCart.length > 0 ?
                                    foodsInCart.map((food, index) => (
                                        <CartFoodContainer
                                            key={index}
                                            name={food.name}
                                            price={food.totalPrice}
                                            tastes={food.tastes}
                                            onRemoveClicked={() => removeFoodFromCart(index)}

                                        />
                                    )) :
                                    <span className="font-roboto-condensed font-bold text-center">Nenhum pedido no carrinho</span>
                            }

                        </div>
                        <div className="absolute inset-0 top-[90%] z-10 rounded-b-lg bg-white h-fit flex w-full justify-between items-center p-2">
                            <span className="font-roboto-condensed font-bold text-xl">Valor total: RS {totalValue.toFixed(2)}</span>
                            <button
                                onClick={() => {
                                    setIsOpen(false)
                                    setPersonDialogOpen(true);
                                }
                                }

                                className="flex bg-softGreen p-2 rounded-lg items-center gap-2">

                                <img src={BlackCarrinho} alt="Carrinho" className="w-[20px]" />
                                <span>Confirmar pedido</span>
                            </button>

                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            <PersonAddressDialog
                isOpen={isPersonDialogOpen}
                changeOpenState={() => {
                   isPersonDialogOpen ? setPersonDialogOpen(false):setPersonDialogOpen(true);
                }}
            />

        </>
    )
}