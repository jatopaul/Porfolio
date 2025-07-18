import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfoilioComponent } from './Components/portfoilio/portfoilio.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactusComponent } from './Components/contactus/contactus.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfoilioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactusComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
