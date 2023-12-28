import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return[
      '/assets/chicken pickle.webp',
      '/assets/chicken pickle.webp',
      '/assets/muttonpickle.webp',
      '/assets/prawnpickle.webp',
      '/assets/mangopickle.webp',
      '/assets/redchillipickle.webp',
      '/assets/lemonpickle.jpg',
      '/assets/gongurapickle.jpg',
      '/assets/DrumstickPickle.jpg'
    ]
  }
}
