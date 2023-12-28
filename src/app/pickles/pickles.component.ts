import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-pickles',
  templateUrl: './pickles.component.html',
  styleUrls: ['./pickles.component.css']
})
export class PicklesComponent {
//  constructor(private fs:FoodService){}
  pickles = [
    {'id':1, 'name':'Chicken Pickle', 'description': 'Freshly made Chicken pickle with home-made spices.','image':'assets/img/chicken pickle.webp'},
    {'id':2, 'name':'Mutton Pickle', 'description': 'Freshly made Mutton pickle with home-made spices.','image':'../../assets/img/muttonpickle.webp'},
    {'id':3, 'name':'Prawns Pickle', 'description': 'Freshly made Prawns pickle with home-made spices.','image':'../../assets/img/prawnpickle.webp'},
    {'id':4, 'name':'Mango Pickle', 'description': 'Freshly made Mango pickle with home-made spices.','image':'../../assets/img/mangopickle.webp'},
    {'id':5, 'name':'Gongura Pickle', 'description': 'Freshly made Gongura pickle with home-made spices.','image':'../../assets/img/gongurapickle.jpg'},
    {'id':6, 'name':'Drumstick Pickle', 'description': 'Freshly made Drumstick pickle with home-made spices.','image':'../../assets/img/DrumstickPickle.jpg'},
    {'id':7, 'name':'Lemon Pickle', 'description': 'Freshly made Lemon pickle with home-made spices.','image':'../../assets/img/lemonpickle.jpg'},
    {'id':8, 'name':'Red Chilli Pickle', 'description': 'Freshly made Red-Chilli pickle with home-made spices.','image':'../../assets/img/redchillipickle.webp'},
    {'id':4, 'name':'Tomato Pickle', 'description': 'Freshly made Tomato pickle with home-made spices.','image':'../../assets/img/tomatopickle.jpg'}
  ]
 getVegPickles(){}
 getNonVegPickles(){}
 getAllPickles(){}
}
