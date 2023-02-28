

import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { InputComponent } from "../InputComponent";
import {WhatsappLogo} from "phosphor-react";
import { FoodToOrder } from "../../models/foodModel";
import ReactWhatsapp from 'react-whatsapp';
import { OrderModel } from "../../models/orderModel";
interface PersonAddressDialogProps {
    isOpen: boolean;
    setIsOpen?:React.Dispatch<React.SetStateAction<boolean>>;
    changeOpenState?(): void;
    foodsToOrder: FoodToOrder[];
    orderPrice:number;
}

export function PersonAddressDialog({ isOpen = false, changeOpenState,setIsOpen,foodsToOrder ,orderPrice}: PersonAddressDialogProps) {

    const listDisctricts:Array<ItemSelectorProps> = [
        {
            text:'Jardim Aeroporto',
            value:1,
            
        },
        {
            text:'Alto Boa Vista',
            value:2,
            
        }
    ];
    const listOfPayments:Array<ItemSelectorProps> = [
        {
            text:'Débito',
            
        },
        {
            text:'Crédito'
        },
        {
            text:'Em espécie'
        },
        {
            text:'Pix'
        }

    ]

    const [nameInForm, setNameInForm] = useState<string>();
    const [numberInForm, setNumberInForm] = useState<string>();
    const [addressInForm, setAddresInForm] = useState<string>();
    const [numberAddressInForm,setNumberAddressInForm] = useState<string>();
    const [complementInForm,setComplementInForm] = useState<string>();
    const [districtInForm,setDistrictInForm] = useState<string>();
    const [referenceInForm, setReferenceInForm] = useState<string>();
    const [paymentInForm, setPaymentInForm] = useState<string>();
    const [districtTaxeInForm, setDistrictTaxeInForm] = useState<string>();
    const [observationInForm, setObservationInForm] = useState<string>();

    const [taxeInFormValue, setTaxeInFormValue] = useState<number>();

    const [finalOrderValue,setFinalOrderValue] = useState<number>();
    
    


    useEffect(()=>{
        const newFinalOrderValue = orderPrice + (taxeInFormValue ?? 0);
        setFinalOrderValue(newFinalOrderValue);
       

    },[taxeInFormValue])


    function sendToWhatsApp(number:number=5583987141424,order:OrderModel){
        const pedidos =  `${order.foodsToCartModel.map((food,index) =>{
            const tastes = food.tastes;
            const observation = food.observation ? `\nOBS:${food.observation}` : "\nOBS: Nenhuma observação"
            return `\n ◉ ${food.name}:\n${tastes.map((taste) => `\n- ${taste}`)+"\n"+ observation + "\n"}`
        }).toString().replaceAll(',','')}`

        const addressPerson = order.personData.address;


        const endereco = `\n\n====== Endereço para entrega =====\n - Endereço:${addressPerson.address}, ${addressPerson.numberAddres}\n - Complemento:${addressPerson.complement}\n - Bairro:${addressPerson.district}\n - Ponto de Referência:${addressPerson.reference ?? 'Nenhum'}\n - Observações:${addressPerson.observation}\n`
        const pagamento = `===== Pagamento ====\n - Forma de pagamento:${order.personData.payment_method}\n - Bairro c/ taxa: ${order.personData.districtTaxe} - RS${order.personData.taxeValue?.toFixed(2)} \n - Valor total do pedido: RS${order.orderValue?.toFixed(2)}`

       let url = `https://api.whatsapp.com/send/?phone=${number}`
       const title = `Olá, me chamo ${order.personData.name} e gostaria dos seguintes pedidos:\n`;
       
        const text = title + pedidos + endereco + pagamento;
        


         url+= `&text=${encodeURI(text)}`
       
        window.open(url);
       
    }



    function onSubmitForm(event:FormEvent){
        
        if(!nameInForm){
            event.preventDefault()
            return alert('Por favor, digite o seu nome')
        }
        if(!addressInForm || !numberAddressInForm){
            event.preventDefault()
            return alert("Por favor, digite seu endereço e/ou o numero da casa")
        }
        if(!complementInForm || !districtInForm){
            event.preventDefault()
            return alert("Por favor, digite o complemento e/ou o bairro")
        }
        if(!paymentInForm || !districtInForm){
            event.preventDefault()
            return alert("Escolha um metodo de pagamento e o bairro onde vive");
        }


        const Order = new OrderModel({
            foodsToCartModel:foodsToOrder,
            personData:{
                name:nameInForm,
            number: numberInForm,
            address:{
                address:addressInForm,
                numberAddres:numberAddressInForm,
                complement: complementInForm,
                district: districtInForm,
                reference: referenceInForm,
                observation:observationInForm
            },
            payment_method: paymentInForm,
            districtTaxe: districtTaxeInForm,
            taxeValue: taxeInFormValue,
            },
            orderValue:finalOrderValue
        })
        // sendToWhatsApp(5583987141424,Order);
        localStorage.clear();
       
    }


    


    return (
        <Dialog.Root
            onOpenChange={changeOpenState}
            open={isOpen}
        >
            

            <Dialog.Portal
            >
                <Dialog.Overlay className="bg-black/80 inset-0 fixed" />

                <Dialog.Content className="fixed rounded-lg inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[355px] h-[90%] overflow-y-clip bg-white ">
                    <Dialog.Title className="bg-defaultBackground  rounded-t-lg flex items-center p-2">
                        <Dialog.Close onClick={() => setTaxeInFormValue(0)}>
                            <ArrowLeft size={22} weight="bold" color="white" />
                        </Dialog.Close>
                        <span className="font-roboto-condensed ml-3 font-bold text-softWhite">Dados para entrega</span>
                    </Dialog.Title>
                    {/* Body content */}
                    <form onSubmit={onSubmitForm} className="flex flex-col max-h-vh-80  overflow-auto p-2 pb-5 w-full" >
                        <span className="font-roboto-condensed font-bold text-xl my-2">Informações pessoais</span>
                        <div className="flex items-center justify-start p-1 gap-2">

                            <InputComponent
                                label="Nome completo"
                                htmlFor="name"
                                placeholder="Digite o seu nome"
                                onChangeRS={setNameInForm}

                            />
                            <InputComponent
                                onChangeRS={setNumberInForm}
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
                                onChangeRS={setAddresInForm}
                            />
                            <InputComponent
                                label="Numero"
                                placeholder="Nº da residência"
                                inputSize="sm"
                                type="number"
                                htmlFor="address_number"
                                onChangeRS={setNumberAddressInForm}
                            />
                        </div>
                        <div className="flex gap-2 mt-4 mb-4 items-center">
                            <InputComponent
                                label="Complemento"
                                placeholder="Casa/ Bloco/ Apartamento"
                                htmlFor="complement"
                                onChangeRS={setComplementInForm}

                            />
                            <InputComponent
                                label="Bairro"
                                placeholder="Bairro"
                                inputSize="sm"
                                type="text"
                                htmlFor="district"
                                onChangeRS={setDistrictInForm}
                            />
                        </div>
                        <InputComponent
                            htmlFor="reference"
                            label="Ponto de referência"
                            placeholder="Ao lade de, próximo à, etc..."
                            onChangeRS={setReferenceInForm}
                        />
                        <span className="font-roboto-condensed font-bold text-xl my-4">Informações para pagamento</span>
                        <div className="flex gap-1 mt-4 mb-4 items-center">
                                <InputComponent
                                    label="Forma de pagamento"
                                    reactCompType="mChoose"
                                    inputSize="lg"
                                    placeholder="Forma de pagamento"
                                    listItens={listOfPayments}
                                    onChangeRS={setPaymentInForm}

                                />
                                <InputComponent
                                    label="Bairro para taxa"
                                    reactCompType="mChoose"
                                    inputSize="md"
                                    placeholder="Bairro p/ taxa"
                                    listItens={listDisctricts}
                                    onChangeRS={setDistrictTaxeInForm}
                                    onChangeRN={setTaxeInFormValue}
                                />
                        </div>
                        
                        <InputComponent
                            label="Observações"
                            htmlFor="observation"
                            placeholder="Observações na entrega ou em algum pedido"
                            reactCompType="obs"
                            onChangeRS={setObservationInForm}
                        />
                        
                      

                        <div className="flex flex-col gap-2 w-full items-start my-5 ">
                            <span className="font-roboto-condensed font-semibold text-xl">Valor do pedido: R$ {finalOrderValue ? finalOrderValue.toFixed(2) : orderPrice.toFixed(2)}</span>
                            <button 
                            type="submit"
                           
                            className="flex items-center gap-2 bg-softGreen p-2 rounded-lg">
                                Enviar pedido para whatsapp
                                <WhatsappLogo size={22}/>
                            </button>
                           
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}


