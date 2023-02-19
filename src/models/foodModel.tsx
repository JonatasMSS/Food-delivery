
interface FoodModel{
    name:string;
    foodImage?:string;
    description?:string;
    totalPrice:number;
    tastes:Array<string>;
    observation?:string;
}



export class FoodToOrder{
    name:string;
    foodImage?:string;
    description?:string;
    totalPrice:number;
    tastes:Array<string>;
    observation?:string;
    constructor({name,description,totalPrice,tastes,foodImage,observation}:FoodModel){
        this.name = name;
        this.description = description;
        this.totalPrice = totalPrice;
        this.tastes = tastes;
        this.foodImage = foodImage;
        this.observation = observation;
    }


}