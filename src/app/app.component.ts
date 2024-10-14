import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./page/home.component";
import { CatalogComponent } from "./page/katalog.component";
import { TestimonialComponent } from "./page/testimonial.component";
import { AboutUsComponent } from "./page/tentang.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CatalogComponent, TestimonialComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kreyasi-home';
}
