

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { InputComponent } from "../InputComponent";

interface PersonAddressDialogProps {
    isOpen: boolean;
    changeOpenState?(): void;
}

export function PersonAddressDialog({ isOpen = false, changeOpenState }: PersonAddressDialogProps) {



    return (
        <Dialog.Root
            onOpenChange={changeOpenState}
            open={isOpen}
        >


            <Dialog.Portal
            >
                <Dialog.Overlay className="bg-black/80 inset-0 fixed" />

                <Dialog.Content className="absolute rounded-lg inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] min-h-[70%] bg-white ">
                    <Dialog.Title className="bg-defaultBackground  rounded-t-lg flex items-center p-2">
                        <Dialog.Close>
                            <ArrowLeft size={22} weight="bold" color="white" />
                        </Dialog.Close>
                        <span className="font-roboto-condensed ml-3 font-bold text-softWhite">Dados para entrega</span>
                    </Dialog.Title>
                    {/* Body content */}
                    <div className="flex flex-col p-2 w-full" >
                        <span className="font-roboto-condensed font-bold text-xl my-2">Informações pessoais</span>
                        <div className="flex items-center justify-start p-1 gap-2">

                            <InputComponent
                                label="Nome "
                                htmlFor="name"
                                placeholder="Digite o seu nome"
                                

                            />
                            <InputComponent
                                label="Numero"
                                htmlFor="number"
                                placeholder="Numero"
                                inputSize="md"
                                type="tel"
                                

                            />
                          
                        </div>
                        <span className="font-roboto-condensed font-bold text-xl my-2">Dados para entrega</span>
                      
                    </div>







                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}


