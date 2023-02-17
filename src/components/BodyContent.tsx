import { Food } from "./Food";
import { FoodDialog } from "./dialogs/FoodDialog";
import { LocalListData } from "../data/fixedFoodData";
import { LocalStorageController } from "../data/localDataStorageController";
import { FoodToOrder } from "../models/foodModel";

export function BodyContent() {

  return (
    <div className='bg-softWhite my-6 flex flex-col rounded-lg p-2 w-11/12'>
      <span
        className='font-roboto-condensed text-xl font-bold border-b-2 border-b-zinc-500'
      >
        Selecione o seu pedido

      </span>

      {
        LocalListData.map((food, i) => (
          <FoodDialog
            name={food.name}
            price={food.price}
            description={food.description}
            tastes={food.tastes}
            key={i}
            type={food.type}

          />
        ))
      }



    </div>
  );
}