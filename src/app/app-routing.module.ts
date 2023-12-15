import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { DiscovercourseComponent } from './discovercourse/discovercourse.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children: [
      {path:'course',component:CourseComponent},
      {path:'login',component:LoginComponent},
      {path:'join',component:JoinnowComponent}

    ]
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
