

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

                <Dialog.Content className="fixed rounded-lg inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] overflow-y-clip bg-white ">
                    <Dialog.Title className="bg-defaultBackground  rounded-t-lg flex items-center p-2">
                        <Dialog.Close >
                            <ArrowLeft size={22} weight="bold" color="white" />
                        </Dialog.Close>
                        <span className="font-roboto-condensed ml-3 font-bold text-softWhite">Dados para entrega</span>
                    </Dialog.Title>
                    {/* Body content */}
                    <div className="flex flex-col max-h-vh-80  overflow-auto p-2 pb-10 w-full" >
                        <span className="font-roboto-condensed font-bold text-xl my-2">Informações pessoais</span>
                        <div className="flex items-center justify-start p-1 gap-2">

                            <InputComponent
                                label="Nome completo"
                                htmlFor="name"
                                placeholder="Digite o seu nome"


                            />
                            <InputComponent
                            reactCompType="default"
                                label="Contato "
                                htmlFor="number"
                                placeholder="Numero"
                                inputSize="sm"
                                type="tel"
                                
                            />

                        </div>
                        <span className="font-roboto-condensed font-bold text-xl my-4">Dados para entrega</span>
                        <div className="flex gap-2 items-center">
                            <InputComponent
                                label="Endereço"
                                placeholder="Endereço para entrega"
                                htmlFor="address"

                            />
                            <InputComponent
                                label="Numero"
                                placeholder="Nº da residência"
                                inputSize="sm"
                                type="number"
                                htmlFor="address_number"
                            />
                        </div>
                        <div className="flex gap-2 mt-4 mb-4 items-center">
                            <InputComponent
                                label="Complemento"
                                placeholder="Casa/ Bloco/ Apartamento"
                                htmlFor="complement"

                            />
                            <InputComponent
                                label="Bairro"
                                placeholder="Bairro"
                                inputSize="sm"
                                type="text"
                                htmlFor="district"

                            />
                        </div>
                        <InputComponent
                            htmlFor="reference"
                            label="Ponto de referência"
                            placeholder="Ao lade de, próximo à, etc..."
                        />
                        <span className="font-roboto-condensed font-bold text-xl my-4">Informações para pagamento</span>
                        <div className="flex gap-2 mt-4 mb-4 items-center">
                                <InputComponent
                                    label="Forma de pagamento"
                                    type="text"
                                    inputSize="lg"
                                />
                                <InputComponent
                                    label="Bairro para taxa"
                                    type="text"
                                    inputSize="md"
                                    
                                />
                        </div>
                        
                        <InputComponent
                        
                            label="Observações"
                            htmlFor="observation"
                            placeholder="Observações na entrega ou em algum pedido"
                            reactCompType="obs"
                        />

                        
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}


