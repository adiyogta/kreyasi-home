import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

interface Testimonial {
  image: string;
  name: string;
  location: string;
  review: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterModule],
  template: `
     <header class="bg-[#F1EFE4]">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a [routerLink]="['']" routerLinkActive="active" class="-m-1.5 p-1.5">
        <img class="h-8 w-auto" src="https://res.cloudinary.com/dvqq3izfb/image/upload/v1727884209/Kreyasi-logo-web_who1w3.png" alt="">
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" 
              (click)="toggleMobileMenu()"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#4C6957]">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a  [routerLink]="['/katalog']" routerLinkActive="active" class="text-sm font-semibold leading-6 text-[#4C6957]">Katalog</a>
      <a [routerLink]="['/testimonial']" routerLinkActive="active" class="text-sm font-semibold leading-6 text-[#4C6957]">Testimoni</a>
      <a [routerLink]="['/tentang']" routerLinkActive="active" class="text-sm font-semibold leading-6 text-[#4C6957]">Tentang Kami</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="https://wa.me/6285769860525?text=Halo%20admin%20kreyasi%20mau%20tanya%20Undanganya%20dong" class="text-sm font-semibold leading-6 text-[#F1EFE4] bg-[#4C6957] px-6 py-2 rounded-full">Pesan Sekarang <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <!-- Mobile menu -->
  <div class="lg:hidden" 
       role="dialog" 
       aria-modal="true"
       [ngClass]="{'hidden': !isMobileMenuOpen}">
    <!-- Background backdrop -->
    <div class="fixed inset-0 z-10" (click)="toggleMobileMenu()"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#F1EFE4] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#4C6957]">
      <div class="flex items-center justify-between">
        <a [routerLink]="['']" routerLinkActive="active" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://res.cloudinary.com/dvqq3izfb/image/upload/v1727964589/Kreyasi-profile_ltff5s.png" alt="">
        </a>
        <button type="button" 
                (click)="toggleMobileMenu()"
                class="-m-2.5 rounded-md p-2.5 text-[#4C6957]">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a [routerLink]="['/katalog']" routerLinkActive="active" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4C6957] hover:bg-gray-50">Katalog</a>
            <a [routerLink]="['/testimonial']" routerLinkActive="active" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4C6957] hover:bg-gray-50">Testimoni</a>
            <a [routerLink]="['/tentang']" routerLinkActive="active" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4C6957] hover:bg-gray-50">Tentang Kami</a>
          </div>
          <div class="py-6">
            <a href="https://wa.me/6285769860525?text=Halo%20admin%20kreyasi%20mau%20tanya%20Undanganya%20dong" class="-mx-3 block rounded-full px-3 py-2.5 text-base text-center border border-3 font-semibold leading-7 text-[#F1EFE4] bg-[#4C6957] hover:bg-gray-600">Pesan Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    <section class="text-[#4C6957] body-font bg-[#F1EFE4]">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h2 class="sm:text-3xl text-2xl font-semibold title-font mb-4">Testimonial Pelanggan</h2>
          <p class="text-[#7A7655] lg:w-2/3 mx-auto leading-relaxed text-base">
            Lihat apa yang dikatakan pelanggan kami tentang layanan KREYASI
          </p>
        </div>

        <div class="flex flex-wrap -m-4">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center bg-white p-8 rounded-xl shadow-md">
                <img class="w-20 h-20 mb-8 p-1 object-contain object-center rounded-full inline-block border-4 border-[#4C6957]" 
                     [src]="testimonial.image" [alt]="testimonial.name">
                <div class="flex items-center justify-center mb-4">
                  @for (star of [1,2,3,4,5]; track star) {
                    <i class="fas fa-star" [class.text-yellow-500]="star <= testimonial.rating" 
                       [class.text-gray-300]="star > testimonial.rating"></i>
                  }
                </div>
                <p class="leading-relaxed text-[#4C6957] mb-6">{{testimonial.review}}</p>
                <span class="inline-block h-1 w-10 rounded bg-[#4C6957] mb-6"></span>
                <h3 class="text-[#4C6957] font-medium title-font tracking-wider text-sm mb-1">{{testimonial.name}}</h3>
                <p class="text-[#7A7655]">{{testimonial.location}}</p>
              </div>
            </div>
          }
        </div>

        <div class="mt-12 text-center">
          <button class="text-[#F1EFE4] bg-[#4C6957] border-0 py-3 px-8 focus:outline-none hover:bg-[#3a5142] rounded-full text-lg">
            Berikan Testimoni
          </button>
        </div>
      </div>
    </section>

    <footer class="bg-gradient-to-r from-[#4C6957] to-[#7A7655] text-[#F1EFE4] py-16">
  <div class="container mx-auto px-4">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <!-- Company Info -->
      <div class="space-y-6">
        <div class="flex items-center space-x-2">
          <img src="https://res.cloudinary.com/dvqq3izfb/image/upload/v1728047038/Kreyasi_logo_web_kbzi3o.png" alt="KREYASI Logo" class="h-10">
        </div>
        <p class="text-[#ffffff]">
          Menciptakan undangan digital yang elegan untuk momen spesial Anda dengan sentuhan modern dan personal.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-medium mb-6 relative">
          Menu Cepat
          <span class="absolute bottom-0 left-0 w-12 h-1 bg-white rounded-full"></span>
        </h4>
        <ul class="space-y-4">
          <li>
            <a [routerLink]="['']" routerLinkActive="active" class="text-[#ffffff] hover:text-[#ffffff] transition-colors duration-300 flex items-center">
              <span class="mr-2">→</span> Beranda
            </a>
          </li>
          <li>
            <a [routerLink]="['/katalog']" routerLinkActive="active" class="text-[#ffffff] hover:text-[#ffffff] transition-colors duration-300 flex items-center">
              <span class="mr-2">→</span> Katalog Desain
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="text-lg font-medium mb-6 relative">
          Hubungi Kami
          <span class="absolute bottom-0 left-0 w-12 h-1 bg-white rounded-full"></span>
        </h4>
        <ul class="space-y-4">
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span class="text-[#ffffff]">+62 8576-9860-525</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-[#ffffff]">D.I. Yogyakarta, Indonesia</span>
          </li>
        </ul>
      </div>

      <!-- Business Hours -->
      <div>
        <h4 class="text-lg font-medium mb-6 relative">
          Jam Operasional
          <span class="absolute bottom-0 left-0 w-12 h-1 bg-white rounded-full"></span>
        </h4>
        <ul class="space-y-4">
          <li class="flex justify-between">
            <span class="text-[#ffffff]">Senin - Jumat</span>
            <span class="text-[#ffffff]">10:00 - 20:00</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#ffffff]">Sabtu</span>
            <span class="text-[#ffffff]">10:00 - 17:00</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#ffffff]">Minggu</span>
            <span class="text-[#ffffff]">12:00 - 17:00</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Social Media -->
    <div class="mt-12 pt-8 border-t border-[#ffffff]">
      <div class="flex justify-center space-x-6">
        <a href="#" class="group">
          <div class="bg-[#4C6957] p-3 rounded-full transition-all duration-300 group-hover:bg-[#F1EFE4]">
            <svg class="h-5 w-5 text-[#ffffff] group-hover:text-[#4C6957]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        </a>
        <a href="#" class="group">
          <div class="bg-[#4C6957] p-3 rounded-full transition-all duration-300 group-hover:bg-[#F1EFE4]">
            <svg class="h-5 w-5 text-[#ffffff] group-hover:text-[#4C6957]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </a>
        <a href="#" class="group">
          <div class="bg-[#4C6957] p-3 rounded-full transition-all duration-300 group-hover:bg-[#F1EFE4]">
            <svg class="h-5 w-5 text-[#ffffff] group-hover:text-[#4C6957]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 text-center">
      <p class="text-[#F1EFE4] text-sm">
        &copy; {{ currentYear }} KREYASI. Semua hak cipta dilindungi.
      </p>
    </div>
  </div>
</footer>
  `,
  styles: ``
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Ichwan & Endah',
      location: 'Kalianda',
      review: 'Desain yang sangat elegan dan proses pemesanan yang mudah. Tim KREYASI sangat membantu dalam customisasi desain sesuai keinginan kami.',
      rating: 5
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Anita & Budi',
      location: 'Bandung',
      review: 'Hasil undangan digitalnya memuaskan dan pengerjaan yang cepat. Recommended untuk yang mencari undangan digital berkualitas!',
      rating: 5
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Rini & Andi',
      location: 'Yogyakarta',
      review: 'Sangat puas dengan layanan KREYASI. Desainnya modern dan sesuai dengan tema pernikahan kami. Terima kasih!',
      rating: 5
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Dian & Eko',
      location: 'Surabaya',
      review: 'Proses pemesanan yang cepat dan tim support yang responsif. Hasilnya memuaskan dan banyak tamu yang memuji desainnya.',
      rating: 4
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Siti & Rahmat',
      location: 'Jakarta',
      review: 'KREYASI memberikan solusi undangan digital yang elegan dan praktis. Sangat membantu di masa pandemi ini.',
      rating: 5
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728886036/user-solid_r6taxs.svg',
      name: 'Maya & Gilang',
      location: 'Semarang',
      review: 'Desain yang unik dan sesuai dengan budget kami. Proses revisi juga cepat dan mudah. Terima kasih KREYASI!',
      rating: 5
    }
  ];

  // Add any additional methods or properties here
  currentYear = new Date().getFullYear();

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}