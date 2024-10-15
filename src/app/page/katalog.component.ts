import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

interface CatalogItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterModule],
  template: `
    <header class="bg-[#F1EFE4]">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a [routerLink]="['']" routerLinkActive="active"  class="-m-1.5 p-1.5">
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
          <a [routerLink]="['/katalog']" routerLinkActive="active"  class="text-sm font-semibold leading-6 text-[#4C6957]">Katalog</a>
          <a [routerLink]="['/testimonial']" routerLinkActive="active"  class="text-sm font-semibold leading-6 text-[#4C6957]">Testimoni</a>
          <a [routerLink]="['/tentang']" routerLinkActive="active"  class="text-sm font-semibold leading-6 text-[#4C6957]">Tentang Kami</a>
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
          <!-- Mobile menu content -->
          <!-- ... (same as in HomeComponent) ... -->
        </div>
      </div>
    </header>

    <section class="text-[#4C6957] body-font bg-[#F1EFE4]">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Katalog Undangan Digital</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-[#7A7655]">
            Pilihan desain undangan digital eksklusif dengan berbagai tema yang elegan. Setiap desain dapat disesuaikan dengan kebutuhan dan keinginan Anda.
          </p>
        </div>

        <div class="flex flex-wrap -m-4">
          @for (item of catalogItems; track item.title) {
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="h-full border-2 border-[#4C6957] border-opacity-60 rounded-lg overflow-hidden">
                <img [src]="item.image" 
                     [alt]="item.title"
                     class="lg:h-72 md:h-48 w-full object-cover object-center">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-[#7A7655] mb-1">{{item.subtitle}}</h2>
                  <h1 class="title-font text-lg font-medium text-[#4C6957] mb-3">{{item.title}}</h1>
                  <p class="leading-relaxed mb-3">{{item.description}}</p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-[#4C6957] inline-flex items-center md:mb-2 lg:mb-0">Lihat Detail
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-[#7A7655] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-[#4C6957] border-opacity-50">
                      {{item.price}}
                    </span>
                    <span class="text-[#7A7655] inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>Pesan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="flex justify-center mt-12">
          <button class="text-[#F1EFE4] bg-[#4C6957] border-0 py-3 px-8 focus:outline-none hover:bg-[#3a5142] rounded-full text-lg font-medium">
            Lihat Semua Katalog
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
            <a [routerLink]="['']" routerLinkActive="active"  class="text-[#ffffff] hover:text-[#ffffff] transition-colors duration-300 flex items-center">
              <span class="mr-2">→</span> Beranda
            </a>
          </li>
          <li>
            <a [routerLink]="['/katalog']" routerLinkActive="active"  class="text-[#ffffff] hover:text-[#ffffff] transition-colors duration-300 flex items-center">
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
export class CatalogComponent {

    currentYear = new Date().getFullYear();
  catalogItems: CatalogItem[] = [
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Rustic Elegance',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain elegan dengan sentuhan rustic yang hangat, cocok untuk pernikahan outdoor atau garden party.',
      price: 'Rp 125.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Modern Minimalist',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain minimalis modern dengan layout yang bersih dan typography yang elegan.',
      price: 'Rp 150.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Floral Dream',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain romantis dengan ilustrasi bunga yang indah, sempurna untuk pernikahan dengan tema garden.',
      price: 'Rp 175.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Classic Gold',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain mewah dengan aksen emas, memberikan kesan elegant dan timeless.',
      price: 'Rp 200.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Geometric Art',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain kontemporer dengan elemen geometris yang modern dan sophisticated.',
      price: 'Rp 150.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Watercolor Beauty',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain artistic dengan efek cat air yang lembut dan romantis.',
      price: 'Rp 175.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Tropical Paradise',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain segar dengan motif tropis, cocok untuk pernikahan di pantai atau tema musim panas.',
      price: 'Rp 175.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Vintage Charm',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain klasik dengan sentuhan vintage yang memukau, sempurna untuk pernikahan bertema retro.',
      price: 'Rp 150.000'
    },
    {
      image: 'https://res.cloudinary.com/dvqq3izfb/image/upload/v1728913444/undangan-online-pembuatan-cepat-harga-terjangkau-desain-fresh-kreyasi-yogyakarta-cetak_f5cb0z.png',
      title: 'Bohemian Dreams',
      subtitle: 'TEMPLATE PREMIUM',
      description: 'Desain boho-chic yang unik, ideal untuk pasangan yang mencari gaya yang lebih santai dan artistic.',
      price: 'Rp 175.000'
    }
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}