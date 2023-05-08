import { Component } from '@angular/core';
import { CartItem, CartAction } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new_shoppingcart';

  cart:CartItem[] = []

  process(action: CartAction){
    //to determine if it's existing item
    let i = this.cart.find(item => item.item == action.item);

    if (action.quantity > 0){
      if(!i){
        /*
        let newItem: CartItem = {...action}
        {item: action.item, quantity: action.quantity}
        */
        this.cart.push({...action} as CartItem);
      } else {
        i.quantity += action.quantity;
      }
    }
    else{
      if(i){
        i.quantity += action.quantity;
        // If the quantity of i is now zero or less, remove it from the cart
        if (i.quantity <= 0) {
          this.cart.splice(this.cart.indexOf(i), 1);
        }
      }

    }
    console.info('cart:', this.cart);

  }
}
