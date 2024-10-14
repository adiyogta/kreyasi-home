import { Routes } from '@angular/router';
import { HomeComponent } from './page/home.component';
import { CatalogComponent } from './page/katalog.component';
import { TestimonialComponent } from './page/testimonial.component';
import { AboutUsComponent } from './page/tentang.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'katalog', title: 'Kreyasi.my.id', component: CatalogComponent, },      
      { path: 'tentang', title: 'Kreyasi.my.id', component: AboutUsComponent, }, 
      { path: 'testimonial', title: 'Kreyasi.my.id', component: TestimonialComponent, },// Redirect empty path to 404
      { path: '**', component: HomeComponent }

];
