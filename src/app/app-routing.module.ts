import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu1sComponent } from './menu1s/menu1s.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu1aComponent } from './menu1a/menu1a.component';
import { Menu1bComponent } from './menu1b/menu1b.component';
import { Menu1dComponent } from './menu1d/menu1d.component';
import { Menu1cComponent } from './menu1c/menu1c.component';
import { Menu1eComponent } from './menu1e/menu1e.component';
import { Menu1fComponent } from './menu1f/menu1f.component';
import { Menu3Component } from './menu3/menu3.component';




const routes: Routes = [
  {path: '', redirectTo: 'rightbody', pathMatch: 'full'},
  {path: 'menu1s', component: Menu1sComponent},
  {path: 'rightbody', component:  RightbodyComponent},
  {path: 'menu2', component:  Menu2Component},
  {path: 'menu3', component:  Menu3Component},
  {path: 'menu1a', component: Menu1aComponent},
  {path: 'menu1b', component: Menu1bComponent},
  {path: 'menu1c', component: Menu1cComponent},
  {path: 'menu1d', component: Menu1dComponent},
  {path: 'menu1e', component: Menu1eComponent},
  {path: 'menu1f', component: Menu1fComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
