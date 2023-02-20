

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";


interface PersonAddressDialogProps {
    isOpen: boolean;
    changeOpenState?(): void;
}

export function PersonAddressDialog({ isOpen = false,changeOpenState }: PersonAddressDialogProps) {



    return (
        <Dialog.Root
            onOpenChange={changeOpenState}
            open={isOpen}
        >


            <Dialog.Portal
            >
                <Dialog.Overlay className="bg-black/80 inset-0 fixed" />

                <Dialog.Content className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-20">
                    <Dialog.Title className="bg-defaultBackground ">
                        Dados para entrega
                    </Dialog.Title>
                    <Dialog.Close

                    >
                        x
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}