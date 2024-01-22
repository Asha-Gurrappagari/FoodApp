import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  tags?:Tag[];
  constructor(api:FoodService){
    this.tags=api.getAllTags();
  }
  ngOnInit(): void {
    
  }
}
