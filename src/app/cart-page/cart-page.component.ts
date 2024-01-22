import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  // constructor(private cartService:CartService){
  //   // this.cartService.getCartObservable().subscribe((cart)=>{
  //     this.cart = cart;
  //   })
  // }
  ngOnInit(): void {
  }

}