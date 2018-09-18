import { MyMovieComponentComponent } from './components/my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './components/my-home-component/my-home-component.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: MyHomeComponentComponent },
    { path: 'movie/:id', component: MyMovieComponentComponent }
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
     ],
  declarations: []
})
export class AppRoutingModule { }
