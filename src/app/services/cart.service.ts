  
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, CartSummary } from '../models/cartItem';
import { CartItems } from '../models/cartItems';



@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  private cartSummary = new CartSummary()
  private dataSource = new BehaviorSubject<CartSummary>(this.cartSummary);
  data = this.dataSource.asObservable()
  
  constructor() { }

  addToCart(cartItem:CartItem){
      CartItems.push(cartItem)
      this.cartSummary.customerId = cartItem.quantity
      this.calculateCart()
  }

  removeFromCart(cartItem:CartItem){
    let item:CartItem = CartItems.find(c=>c.car===cartItem.car)
    CartItems.splice(CartItems.indexOf(item),1)
    this.calculateCart()
  }

  calculateCart(){
    let total = CartItems.reduce((acc, val) => acc += val.quantity, 0)
    this.cartSummary.cartTotal = total
    this.dataSource.next(this.cartSummary)
  }

  cartList():CartItem[]{
    return CartItems
  }

  clearCart(){
    CartItems.splice(0, CartItems.length)
  }

}