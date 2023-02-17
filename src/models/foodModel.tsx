
interface FoodModel{
    name:string;
    foodImage?:string;
    description?:string;
    totalPrice:number;
    tastes:Array<string>;
}



export class FoodToOrder{
    name:string;
    foodImage?:string;
    description?:string;
    totalPrice:number;
    tastes:Array<string>;
    constructor({name,description,totalPrice,tastes,foodImage}:FoodModel){
        this.name = name;
        this.description = description;
        this.totalPrice = totalPrice;
        this.tastes = tastes;
        this.foodImage = foodImage;
    }


}