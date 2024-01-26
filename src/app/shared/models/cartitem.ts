import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods,){
        this.food=food;
        // this.powder=food;
        // this.price;
        // this.powder=powder;
    }
    food:Foods;
    quantity:number=1
    // quantityP:number=1;
    // powder:Powders;
    // get pprice(): number{
    //     return this.powder.price * this.quantityP;
    // }
    get price(): number{
        return this.food.price * this.quantity;
    }


}