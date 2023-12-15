import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
   
  }
  course = [
    {'id':1, 'name':'Learn Angular', 'description': 'Learn Angular by clicking Below','image':'assets/img/angular.webp'},
    {'id':2, 'name':'Learn ASP.net', 'description': 'Learn ASP.net by clicking Below','image':'../../assets/img/ASP.webp'},
    {'id':3, 'name':'Learn Node.JS', 'description': 'Learn Node.Js by clicking Below','image':'../../assets/img/nodejs.webp'},
    {'id':4, 'name':'Learn SQL', 'description': 'Learn SQL by clicking Below','image':'../../assets/img/SQL.png'}
  ]

}
