import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'course',component:CourseComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'join',component:JoinnowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
