import { FoodToOrder } from "./foodModel";

interface CartModel{
   foodsToCartModel?:Array<FoodToOrder>;
}

class CartModel{
  foodsInCartModel?: Array<FoodToOrder>;

  constructor({foodsToCartModel}:CartModel){
    this.foodsInCartModel = foodsToCartModel;
  }
}