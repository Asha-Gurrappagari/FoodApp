import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { DiscovercourseComponent } from './discovercourse/discovercourse.component';
import { LoginComponent } from './login/login.component';
import { PicklesComponent } from './pickles/pickles.component';
import { DalsComponent } from './dals/dals.component';
import { PowdersComponent } from './powders/powders.component';
import { SpicesComponent } from './spices/spices.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',component:HomeComponent,
    children: [
      {path:'course',component:CourseComponent},
      {path:'login',component:LoginComponent},
      {path:'join',component:JoinnowComponent}

    ]
  },
  // { path: '/pickle/dals/powders/spices', redirectTo: 'course', pathMatch: 'prefix' },
  // {path:'course',redirectTo:'pickle',pathMatch:'full'},
  // {
  //   path:'pickle',component:PicklesComponent
  // },
  {path:'search/:searchItem',component:CourseComponent},
  {
    path:'course',component:CourseComponent,
    children: [
      {path:'pickle',component:PicklesComponent},
      {path:'dals',component:DalsComponent},
      {path:'powders',component:PowdersComponent},
      {path:'spices',component:SpicesComponent}

    ]
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
