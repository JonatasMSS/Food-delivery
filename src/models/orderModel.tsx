import { FoodToOrder } from "./foodModel";



interface OrderModelProps{
    foodsToCartModel?:Array<FoodToOrder>;
    personData:{
        name:string | undefined;
            number: string | undefined;
            address:{
                address:string | undefined,
                numberAddres:string | undefined,
                complement: string | undefined,
                district: string | undefined,
                reference: string | undefined,
                observation:string| undefined
            },
            payment_method: string | undefined;
            districtTaxe: string | undefined;
            taxeValue: number | undefined;
        
    },
    orderValue: number | undefined;
 }
 


export class OrderModel {
    foodsToCartModel: Array<FoodToOrder>;
    personData: {
        name:string | undefined;
            number: string | undefined;
            address:{
                address:string | undefined,
                numberAddres:string | undefined,
                complement: string | undefined,
                district: string | undefined,
                reference: string | undefined,
                observation: string | undefined
            },
            payment_method: string | undefined;
            districtTaxe: string | undefined;
            taxeValue: number | undefined;
    
    };
    orderValue: number | undefined;
    constructor({...data}:OrderModelProps){
        this.foodsToCartModel = data.foodsToCartModel ?? [];
        this.personData = data.personData;
        this.orderValue = data.orderValue;
    }
}