import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  /* {path: '', redirectTo:'/home', pathMatch: 'full'}, */
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'about/:pageId', component:AboutComponent},
  {path:'about/:pageId/:imgId', component:DetailsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
