import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods} from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  // private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)
  // constructor(){}
  // cartData = new EventEmitter<CartItem[] | []>();
  addToCart(food:Foods) :void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id) 
    if(cartItem){
      this.changeQuantity(food.id , cartItem.quantity + 1)
      return;
    }
    // else if(cartItem=this.cart.items.find(item => item.powder.id === powder.id)){
    //   this.changeQuantity(powder.id , cartItem.quantityP + 1)
    //   return;
    // }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item =>item.food.id != foodId)
  }
  changeQuantity(foodId:number,quantity:number,){
    let cartItem=this.cart.items.find(item => item.food.id=== foodId);
    if(!cartItem)return;
    cartItem.quantity=quantity;
    // cartItem.price= quantity*cartItem.food.price;
    // this.cartData.emit(cartItem);
  }
  getCart():Cart{
    return this.cart;
  }
}
