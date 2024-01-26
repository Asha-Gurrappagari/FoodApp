import { CartItem } from "./cartitem";

export class Cart{
    items: CartItem[] = [];
    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item=>{
            totalPrice += item.price;
        });
        return totalPrice;
    }
    // get totalpprice():number{
    //     let totalpprice = 0;
    //     this.items.forEach(item=>{
    //         totalpprice += item.pprice;
    //     });
    //     return totalpprice;
    // }
}