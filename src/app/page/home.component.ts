import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}
interface KatalogItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
}
interface OrderStep {
  icon: string;
  title: string;
  description: string;
}
interface Testimonial {
  image: string;
  name: string;
  location: string;
  review: string;
  rating: number;
}
interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterModule],
  template:`
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
      <a [routerLink]="['/katalog']" routerLinkActive="active" class="text-sm font-semibold leading-6 text-[#4C6957]">Katalog</a>
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
  <div class="mx-auto flex max-w-7xl p-6 lg:px-8 py-16 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#4C6957]">Undangan Online Elegan
        <br class="hidden lg:inline-block">Untuk Momen Spesial Anda
      </h1>
      <p class="mb-8 leading-relaxed text-[#7A7655] font-medium">Desain Berkualitas, Proses Cepat,
        Dengan Harga Terjangkau.</p>
      <div class="flex justify-center">
        <button onclick="window.location.href='https://wa.me/6285769860525?text=Halo%20admin%20kreyasi%20mau%20tanya%20Undanganya%20dong'" class="text-white bg-[#4C6957] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Pesan Sekarang</button>
        <button class="ml-4 inline-flex text-[#4C6957] bg-[#F1EFE4] border-4 border-[#4C6957] py-2 px-6 focus:outline-none hover:bg-white rounded-full text-lg font-medium" [routerLink]="['/katalog']" routerLinkActive="active">Lihat Katalog</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dvqq3izfb/image/upload/v1728912900/undangan-online-cetak-murah-yogyakarta-jakarta-bandung-lampung-solo-surakarta-kreyasi-solusi-undangan_ymvb3p.png">
    </div>
  </div>
</section>

<section class="text-[#F1EFE4] body-font bg-gradient-to-r from-[#4C6957] to-[#7A7655]">
  <div class="container px-5 md:py-16 py-14 mx-auto">
    <div class="text-center mb-16">
      <h2 class="sm:text-3xl text-2xl font-semibold title-font text-[#F1EFE4] mb-4">
        Mengapa Memilih KREYASI?
      </h2>
      <p class="text-[#ffffff] font-medium lg:w-2/3 mx-auto leading-relaxed text-base">
        Kami berkomitmen memberikan layanan terbaik untuk mewujudkan undangan spesial sesuai impian Anda
      </p>
    </div>

    <div class="flex flex-wrap -m-4 pb-16">
      @for (feature of features; track feature.title) {
        <div class="p-4 md:w-1/4 w-full">
          <div class="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#F1EFE4] text-[#4C6957] mb-4">
              <img class="text-2xl p-4" src="{{feature.icon}}">
            </div>
            <h3 class="text-[#4C6957] text-md font-semibold mb-2">{{feature.title}}</h3>
            <p class="text-[#7A7655] text-center text-base">{{feature.description}}</p>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<div class="bg-[#F1EFE4] w-full h-16"></div>

<section class="text-gray-600 body-font bg-[#4C6957]">
  <div class="container px-5 md:py-16 py-14 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#F1EFE4]">Katalog Undangan Digital</h1>
      <p class="lg:w-2/3 mx-auto md:py-1 py-4 leading-relaxed text-base text-[#F1EFE4]">
        Pilihan desain undangan digital eksklusif dengan berbagai tema yang elegan. Setiap desain dapat disesuaikan dengan kebutuhan dan keinginan Anda.
      </p>
    </div>

    <div class="flex flex-wrap -m-4">
      @for (item of katalogItems; track item.title) {
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative h-96">
            <img [src]="item.image" 
                 [alt]="item.title"
                 class="absolute inset-0 w-full h-full object-cover object-center rounded-xl">
            <div class="px-8 py-10 relative z-10 w-full border-4 border-[#F1EFE4] bg-white opacity-0 hover:opacity-95 rounded-lg transition-opacity duration-300">
              <h2 class="tracking-widest text-sm title-font font-medium text-[#4C6957] mb-1">{{item.subtitle}}</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{item.title}}</h1>
              <p class="leading-relaxed text-[#7A7655]">{{item.description}}</p>
              <p class="mt-4 text-[#4C6957] font-semibold">{{item.price}}</p>
              <button class="mt-4 text-[#F1EFE4] bg-[#4C6957] border-0 py-2 px-6 focus:outline-none hover:bg-[#3a5142] rounded-full text-sm">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      }
    </div>

    <div class="flex justify-center mt-12">
      <button class="text-[#4C6957] bg-[#F1EFE4] border-0 py-3 px-8 focus:outline-none hover:bg-[#e2e0d5] rounded-full text-lg font-medium">
        Lihat Semua Katalog
      </button>
    </div>
  </div>
</section>

<section class="text-[#4C6957] body-font bg-[#F1EFE4]">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h2 class="sm:text-3xl text-2xl font-semibold title-font mb-4">Cara Pemesanan</h2>
      <p class="text-[#7A7655] lg:w-2/3 mx-auto leading-relaxed text-base">
        Proses pemesanan yang mudah dan cepat untuk mendapatkan undangan digital impian Anda
      </p>
    </div>
    
    <div class="flex flex-wrap -m-4">
      @for (step of steps; track step.title) {
        <div class="p-4 lg:w-1/4 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#4C6957] text-[#F1EFE4] mb-5 flex-shrink-0">
              <i class="{{step.icon}} text-2xl"></i>
            </div>
            <div class="flex-grow">
              <h3 class="text-[#4C6957] text-lg font-medium mb-3">{{step.title}}</h3>
              <p class="text-[#7A7655] leading-relaxed">{{step.description}}</p>
            </div>
          </div>
        </div>
      }
    </div>

    <div class="flex justify-center mt-12">
      <button class="text-[#F1EFE4] bg-[#4C6957] border-0 py-3 px-8 focus:outline-none hover:bg-[#3a5142] rounded-full text-lg">
        Pesan Sekarang
      </button>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font bg-[#4C6957]">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h2 class="text-3xl font-semibold title-font text-[#F1EFE4] mb-4">Testimonial Pelanggan</h2>
      <p class="text-[#F1EFE4] lg:w-2/3 mx-auto leading-relaxed text-base">
        Apa kata mereka tentang layanan KREYASI
      </p>
    </div>

    <div class="flex flex-wrap -m-4">
      @for (testimonial of testimonials; track testimonial.name) {
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center bg-[#F1EFE4] p-8 rounded-xl">
            <img class="w-20 h-20 mb-8 p-1 object-contain object-center rounded-full inline-block border-4 border-[#4C6957]" 
                 [src]="testimonial.image" [alt]="testimonial.name">
            <div class="flex items-center justify-center mb-4">
              @for (star of [1,2,3,4,5]; track star) {
                <i class="fas fa-star" [class.text-yellow-500]="star <= testimonial.rating" 
                   [class.text-[#ffffff]]="star > testimonial.rating"></i>
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
  </div>
</section>

<section class="text-[#4C6957] body-font bg-[#F1EFE4]">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h2 class="sm:text-3xl text-2xl font-semibold title-font mb-4">Frequently Asked Questions</h2>
      <p class="text-[#7A7655] lg:w-2/3 mx-auto leading-relaxed text-base">
        Temukan jawaban untuk pertanyaan yang sering ditanyakan
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      @for (item of faqItems; track item.question) {
        <div class="mb-4">
          <button 
            class="w-full text-left p-4 bg-white rounded-lg focus:outline-none"
            [class.rounded-b-none]="item.isOpen"
            (click)="toggleFaq(item)">
            <div class="flex justify-between items-center">
              <h3 class="font-medium text-[#4C6957]">{{item.question}}</h3>
              <i class="fas" [class.fa-chevron-down]="!item.isOpen" [class.fa-chevron-up]="item.isOpen"></i>
            </div>
          </button>
          <div 
            class="bg-white px-4 rounded-b-lg"
            [class.hidden]="!item.isOpen">
            <p class="text-[#7A7655] py-4">{{item.answer}}</p>
          </div>
        </div>
      }
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
  styles:``
})
export class HomeComponent {

  features: Feature[] = [
    {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAHrZJREFUeJztnXuYU9W5/7/v2pn7oCgogh5RW/FebfFWr1NrUZgEBv1lEmhp53gZkoDnYLFHPT3aVG2rFi8tkAxjobQqJJNacZIBpFanWu9gvRQUPCrqkbtWQMjc9np/f2QGuWSvvXcuk4z6eR6eZ57sdXmZebP2Wu96L4QvGDXBGsegrcNPgK6fKIFjSNAxYD6aQUOIMASMIQAcACoBlAEAAdsZkAA+A/AxE28VLDYzsJ4I6yHpPUi8Hm9evK1w/7P8QIUWIFvGTfOM0pjOY+bzAYwGcAqA0nzMReCNAF5jxgtMeFbr7HixdUHrznzM1V8MOAUYf9X4QVxaPkYSjSXgcgBHFlCcHgDPM2i5xljW2hT5RwFlyYgBoQCuRlclO6pcxFzPwDgA5YWWyYB3QWiRkNGlodirhRbGCkWtAOP9k74hoTcS6AcMHFxoeWzBeAXED+iOkkXLZj+8o9DiGFF0ChAMBsXLm99yCuaZTLio0PLkgB0ghEpk6X2PNj24pdDC7E/RKIDb7dZ2D6VJBPofACcUWp48kCTgd9DlrHhz7INCC9NHUSiAy1d/pSS6jYCT8zC8DuB9gDYQ5GcA7WRgOwGfAdwJAAxxMAHVTLIKTIMADAHwNQAH5UGeLhA9pAHBx0KRD/Mwvi0KqgDjpnlGCYm5AC7N0ZAfgPAMM60RLNdK0FpZsuPtZbOXdWYy2Pjp3hG6lCcISaMk+AQQnS2AsxkoyYGsu4hxR/nH8t5YLNaVg/EyoiAK4L7eXZHs1G4E803oNcZkyFYC2pnwLLP8e1s4tipXMhrhanRVSq3iPCJxAZjPJ+DiLBXibUniP5aGFi/PmZA26HcFcE6tHwdBswEcl0l/ArYzUwsJ/Y/xUOxZAJxbCe0x/ppJw2Sp9ELihyB8K9NxmKilp8cx4/HmhzbmUj4z+k0BahoayqsrOu4D2JdBdx3ACmb8sbJCPha7L5bMtXy5YMJU98m6JqaAMQWZGai2EvCjeDi6LNeyGdEvClDn8x7TQ4gCfLadfgR0MxARkL9oDcfW5ku+XDO6sbFkuGP7JAA3g3Gize4M4tkVW/kn/bE3yLsCOH3eiSBeAGCwjW5dAKK6jp8va46+kyfR8k4wGBQrt6ypBdMtAM6y2f1lhuZtCy96Nx+y9ZE3BagJ1jiqNg37DRECNrpJMM2XQr91aSi2KV+yFQBy+eqvYKJ7ARxto9+/iOCNh6Ir8iZYPgYde93YMkfPQYsYuMJGt9eYKNAWijyXzdwTp00c0iVLnAI0GsCRAFcCYjOzfE9qYvnSuZGXUKCNY4annx4i8sVDkfn5kCnnClA3o25wT2d5HOALLHbZxaDbdw3bdE97sL0n03mdUycfz5q8g5ivBKApmn5AwO3l2+TvY7GYnul82TA+4P66ZPFbAGMtdmEQ3ZYIRYK5liWnCjB+uncE9/ByJpxmaXLG0z0lju8vm/3w/2Uzb62vfqYg+pWt8zjjFZJyYiHNsk5/vQ+gewFUWOrA+M2ZR5z042AwKHMlQ84UoFerVwA41kJzSeA7dw7b8rNsvvUAyOnzzgPxtZl15y2CxeWFvMcfN919mtBFFMBJFrssqtgmf5ir1Uu1VFomZTKldrL2x99GgDsebpm3vn19Vprs9NX/DISZmY9AVUxwjTrz5Oi6lWsK4tnz9ktrtpx+4ckLenQMAugcC11O0yvFyHUr//lYLubPWgHqZtQN1ru1J8jKDR7jFUBenGhqeSXbeWv93guJsBDZr2KDQHTKupWrH8pWpkxZ88KannUvr14+6uxTNgA0FoAw6XLGqLNOK1238p9/zXZus4mU1DQ0lOsdZY8B+IaF5u16ieM7iabYR9nM2QeB70TuXmGXuQKeMTkaK2MSoZYHiFALwMJqxDe7At4bsp0zYwVwu91adUVysUWnjUd0x47Lc+UZ4wq4LwBwnoWma0H0PCz8QiU4619mLoiHoisIGAPA1AOZme92BbwN2cyXsQIkh4h7ANSZtSOguWKb9GR6JZsOyTRB9ZyB9VLwxYlw9MREKHJeV1XpcGaEVH0EU03djDo71sq8EQ9HX5AC5wN436QpgbnZOdX97UznymgJ7TXvPmLWnwnz2kLRTC5/lNQGPC8T40yDx10C4qzW8OLXD+znjRJzvdG4BIzrz4sYM3pPVs8AOMKk6Yeki29lErdgewVwNbqPBvHvYKo83Lrr8M3T7Y5vBcFseNPGTI+k++P3Pg2qxmXio7ISLMe0hmL/KzU5BsAnJk3/jYWMuN1u25t6WwowurGxhB1aBMCh6pb0t8+SlZ4sz/iGMGiI0TNB8j2jZ1Lbob5YYQzNQqy8sHRO7A0CapGKWjKG8N3kULrZ7vi2FGC4tv1OMJu9b17r0PUJ7QsXdtgVxgaGSx2DDB1NSruqv6Yclcw3XoUgHo6+QEA9UoEoCijo8k26xM7YlhWgd+DrTQT4WCNyPdEc225HiAxQHSWvcE71nJ7ugRQiqBqUmLIySeeTeDi6jFMe0yo0Jvk7V6Or0uq4lhTA7XaXMsk5UL/3mQRf3R+ergz+m+JxKQQec/q8NX0fuAPuapffE2LArejXldRlVjeR+aYtHLkbxI+aNDuWHZW3WB3TkgIkh9JMmNiqGXxPfG40J+ZJMzTGEpMmI0H8lNPvWesMeJ9LstjIgN+kT3s/rFzZwo7SrqsIUDvJMG4wWgX3x1QBxk2bPBImSw8BL27SB/+3lQlzQWtTy7MMPGuh6ajePUu1WUMhxazsJcs/S+5f8ikE6gGo9lgOFpgLC8d8UwUQUr8fqVh6I3ZpTN5Vzc3dZmPlEkHyJuTIsYPAy1vnLf5LLsbqD+Jzo68AfJuqDQHnOwP115iNpVSAcYFJl8PM2kd825KmyHqziXJNPBT7OzP9LAdDbSBNXJ2DcfqVjfrgWQD+qW5Ft5ttCFUKQIKlUssYWLOxZ/B9aiHyR1tT5A4CmjMegLBZkqxtnRPZkEOx+oVVzc3dUtA1SGU2SQ9jGBxVU1XjGFqOUuZe/FjVWbDwts/7Q0G9dtetXJ04/qxTtxNwCWxcbzNhpQN0aSLUsi6P4uWVt1/+50fHn33qCIKhWRwATj/hW8eF161al/YVbbwCEJsdJRbFmxY/aUHOvNMWjt6v6zgZQBSmxhK8z8xXV26V5xZDcGa2lJR23gRgq6LJEapVIO0u0TnN+11IfkIxaBfp8vhs/enGXje2jOQhR4ie7hFMYqeQYlO2iZgmTps4pJtLawEeDaYjAVQyYzNA7wrBy+Oh6EoUOJws1zgD9f8FprsUTTZVlMvj0kVUpVeAgKcNjHGGwxEtSIQiGW2c3G53acdQ8UOAr2TQJTgwodN7BDwmGfPbmqImm5yvAIAxN0ypKt3V9R6AwwwbMa5LNEXn7P/xAa8A59TJx4OV7so6dHFnJoK6fPVXJoeKtxh4gEGXI302r2MZmEGEV51+zwJX46Siu6ApNlbMenAXgF8rG6UCdA74wh+4ByD9mnQN9yKWmLfobXsigpwBb5CJ/gRrjqNAakP376zJF2t9nlNtzvelo6uqNASwKgXNSU6f9+L9P9xHAUY3NpZA4EeKQVhA/MqucM6A57dgzvTMfhwR/jY+4P56hv2/FKyY9eAuhviNslEa9/l9FGC449PLwRhm2B9oN3a2SI8zUH8tGNk6hhwqWbS6A25Tk+6XGSZ9AdSnoLr9f4f7KACxMHSXAgAGHrQjUK1/8iFgymi/kIaTktCKwnGzWOkNqFVlGqlMSrGPP+UeBahpaChn8HhF5926w/GIHYEEem6EqfeQDZhnfrUpVENgdRAp7esT6ej7YVBF8juszoq1xKZbNzFoskmbncz0axb0Mkk5mIivRepoaES1FPp4AAtsyFH01DQ0lA8qT14qiS8mouFgDANhMzNvBET7rmT5X616WO0ctiVRvXnYJhg6ktL3XI2uynhzfDewlwIw4zLV3l+SsLX8j/d5z5DgfzNuwVtI43MTc2J7+/BFnX7PXQB+YtSLiFz4gihA3Yy6wT1dZTeCk9MZqCbQ5yYqBggEgG+orkjudPq9czp0/S4zn4X2YHuPy++JMDDDoEmF1Kq+A6AN2HsPQMqz/6e7D9+osgweAAupTI1CENfH9/3jAwBv1A/+KQhvKbpaDaIsaly+SZf0dJa9DcZNMPdXGATwzeWaeLs2UP8d08EJStd2Ir6872cBAE6f+0gAo4y78NN2PXylxAilEJ274+k+X9Xc3M2SVf8B5bgDAVfA28AkHwdseyEfJpger/XXq47q2Lm74mkAu42ek8Qee0BqBRCaMpkDg56yJ6c53VWDiiJLaX/j8k26BMzN2Ov1awcGSgToAdVK0LtfeMZwDMKpE31TDgf6FECqXb1JwrYCCAHlHbvW3eNK9/noxsYSIlLcQyg9gouauhl1g5lkNNtMowyUECNyaaPbMIM6q4+D1KN1fRvYswKQKn3btjOHn/SGXSFJCtV7HCC+t9Y/eX8ffjpC+/SXUIWas3J/UNT0dJXdCPvLvgF0eLmm3Wj01CGlMrGUlKmklg6kAgwNbe0EPJ1JSpLWpsirTr/nQwAGJwE6nKC/6vJ7ZukkXtKYD2XwtQBqVOMyc9q9Q7FT09BQDk5asYhuANH7YB4J0/0OT69paLgt3RHxm8NPeWvl5jd3AahK15OQUgAxttFzHIBBRlNIU78zY+kIvMikzSAGfi5YLmPwwzD54wP4rFTr7hfX81wzqDx5KdS7/d3E8CXC0aMSoch5iXD0KID9UGzmAAyqLtud1m7S+6Vdo+j7DQAQmoOVKdqJkbHLVFcX3w3gX5n2PwDmWY/OffTjnI3Xj0jiA27i9oYYP443RedhL0tAItzSxAy1+ZtINa7qy3uU+3p3hSAplNezTDLjd+7j82OfEJGhUccODKzpqi4bEL77aWGhyh28Id4UTevc2tYUbQJgnDSTYBjRzMyrFXOKji7HcUJCHqNoBOkotXv3vw/xUGQ+AbOzGQPAJxrJCb2ODwMSIjaMaAawHsZuagwiw4hnqDeVJq9v+XVBRKrUpRtykdZl9LCTZoBwJzLwxSPgHRLiotZQ7H+zlaOQMJPhq4vAx8LACScYDAowq1ZpYx9Kcii/vCx5uADIWIOIzFKUWCIYDMpEKHozga8wjWv7HJ2B+Q7RdU587mLVUjYwIGlov2DQcKe/Pq3n7qotb/qgyhDCMIxo7tS71fslEkcIgI0VgDmnufPi4ZYl5dvkyUR0DYBlANLlDXoXwL0kxOlt4eg1A3XTdyCiXf2c7qn1efzoXQmCwaBwBTwBZij3PUQwHPeJ5tgOqBxEGMMcSBVIMiLnyRN7c+DPBzDf7XaXdhyCI6CJERBiZ1dHz8bH58fM0qEMSHYly/9aXZHcCeMjdyURQi5//S1MYv2qzWuOYdBwk2F39jh2qGIzGKlTmIG3MB/kIKDCcPfBuVeAvelVhg96/32haV+4sMPp984BWJnGhUHDwTycLeXvot9YyL72CQwUgBlVghWFlkmY5KX5Clt06PpdUEfxWIewWXdoalfwFIZ2GAKqBVQKwFy0JU8HIk80x7Yz6EqkKqJkTKqUDk+yeEIzDtsnpqxSxX6FfdrCkWcY3EiqP4wCArqZcE1bqMXSDS0r4j+ZoAsotJGJ8lE580tPW7jlD5L4MpNAjjTwFmYakwhF/2i1B4EMr54FQxekUABKlVH9ijzQFmp5qkPnUQD9CuanrZ0E/qXuKDk+0RRptzcTK9Lf0m4HwLsBSutYwOC8BmLkIzp4INHr4PnfNQ0Nt1WX7b4EgmpAGMHgwwm0BRIfEaG9x7HjySxyLavc8rc5GPQJAKPzZs5XgH2ig3voEkAvhRAp/1dNwun3fOmig3vv85f2/ssZY26YUoVdXYZ2HgZtEQCpvnE53QN8FR3cvzh2dxwPdaDvJgGWhudSAo/MkSxfRQcXAAFNXcWFsVqAyNAKx6DhY6/7ftarwFfRwYWBJSuLeZRonW8IYvWNH3XpingBc76KDi4cRPie4vFHj8599GMHwMoU6oL4BAArMxEgFR2s5zo6OJij8XLOmBumVJV+1j0G4ItBfBqBRvLnu/CdxFgPwmqA/i4hlrWFF+XOXW4/XNPdx7KO441b8CoAcEjS1hCMS9CRYPNqYAYI9NzIoFxHB88ptqNiqmy8NhO7ujygPi9c2t/75RAmHA3gIoD9BL3L6ffEIeU9iXmx53MtE0vtR2r/G7ECAERbeNF7UBgiGMh0A2Y1OvhWSWIsMyYBbJZ2ri86uCiYOG3iEKfP26wL8QaYr4KBC7YBpQCuhBDPOQP1f07lZM4NY26YUgWwqlQPO/jz4FAGYBz4weKiYDBo+85gvM97BgxjAoBUdLA8va0pcvvS0OLlbU3RSCLccilMkh31RgcXnHHT6i/qlqWv9aZdye5OhWmiJvXXnAHv/8uFbKW7Oq9XZXph4Lm+9L6i95OXFdINeWnLait1Afft9QWODnb56uuFpL8AUHn62oKBg8Hc4gzU/1c246TSxKuzuwtg4V4/A0zq1OsaNPOQ5P34okYHu/z1dUy0CIpr9CwgMN1V6/PMrQnW2A4e7S3olYC6NP2mncmKPVVSBQBoGikVgJltK4AZAzE6eFzAfQaDFiNHNZeNIEKgevOwl1x+z7lW+9T6vRdCoxdAZFb57Nd7h5I5AKB1TmSDM+B5C4y0yzYBF9UEaxx2cgQIgQ2s2IT2Rgc/vP/nqejg7UUXHVzT0FAukFwMoNxil38R+DlmsYGIexgYTuBzLPj59fFNBp53+j1PgLGwQ8rE/tlB3G631nEYvs0spgNczyCzL9WbFdvkPtlC9ywzxFjOSK8ADBxcvfHwMbBxWUFSvMWk0IBUdPDzbeFFe9sheqODqeiig6srdt8AJuW+ppfnmPm2yo/5iTQl3snl95zDwE8BOC1OfSkIl5ZrQjr9nneQqibaQcBhSWAUGIdYHEeXgn29fpifC9T3Q62v/jIiUsWURxLh6CSLkwEAOf2e96E8CWAnAXajg69ua2rp1xxBdTPqBvd0lr0P9eVYDzHNjDdFfmtlzNqA5wpi/AEWytnkBOIbE6GWu/f/eM/xRZbsbCdAlYBogs17gS9MdHB3R+nVUP/xJRM8Vv/4ANAWiv5ZQJyP/vGI/l0i1JL2eL1HAZbNXtbJgOqXWyG6u22dUyUcd8G87KllCPh1IQJFiOgHygbMt7WFon+2O25rePHr3XrJuUyZmdqtQU2JcLQRBmbBfQwYDGpRDkXih3ambgsv+hcRZXWu7YOBNZ1VpffkYiw79CbQOkPR5AO9ZGfG9x2PNz+0sbJMXsSMX2TqKGrAbgZNTYQjfihswvsowCb9oBVQhSKDL7Jaj66PgR4dzCTOUz0notlZuGsBAGL3xZJtTdH/gRDfBBCHqg6QNRKki9Ft4YhpPaV9FGBVc3M36HMrURoIArYLFMfD0f8E0c8xEKODTXb+OnFrrqaKz128OhGOjheQJwM8F+oSufuzA0AELM9JhKOuePNiS6elA86NvTXr16V71osuBU5eOjdqO3OIy19fB9AsBtRFnHvnYWBhqei6sZABok6/N6y4WEkmwlHLdXozmn+q53QQLiTCKCZ8DUzDAJZIbdg3MGitAP8jU8fRtH9kl78+waBaRb/fJ8LRq+xOBvQ6hR6mTWHmK5Gq9LW/2fJdAEtIiAXFEBbu9Hv+CGCKweMPEuFozm7xCkFae7Mk3EMMQwUg4Afjpk3++dK5i2znD8h3dPDEaROHdMkSpwCNBnAkwJWA2Mws35OaWL50buQl2HgVMdClMK8N+LgJw/+b0+dZBUqlEjMgmghHvXmQKSOcUycfz5q8g1Iri8pW/wEBt5dvk79PY6k7cFyf5y4QjE4y7CjrPHTJ/Us+zUjoIsDwHps0KKuGAvA4p3m/m2N5MqLWVz+ThL6amOthflFzNAMPJIeIl1yNblV6nBSCVZtP0jtKx9iRtdgwVID43GirqYGCeY7b7c7HtahVyOnzNhPRLNvpVwnfYo1eHu/zflPVTEih/B0wUUZ7oWJB5cnCInVpoWiBE5NDaWZuRbKO01d/a7pCSNahwyVxotfYk5ayj/XXoY7pv8xSCvciRenKFA9FVxBgYuKkn6bJ+Zt3av3eC0E5qR4+AiQMy6zEYjGdgD+pBiCmh8ZP9w7INPbmvmy6vB6AygJXRdAj/f0qIPCdUIc92eEyV8Bj+C4niCaoTw4jpM5LzEq1FyOmChBvjn3AoNtNmp3VMVSoatfmFFfAfQEApYm2l7Ugeh4Wkl1JsGFK1tbw4teZYWbxOwta5YOZONAWEkvCVm7T7wPwpqoNA/9Z6/f2i8u2ZJqges7Aein44kQ4emIiFDmvq6p0ODNCqj6CqaZuRp1hLL2UmAlAWbiJgStWbXozJ5df/YUlBYjFYl1MPA3qZZAI/Ptc+rcrZqpRPO3SICYsndvydN8HK2Y9uKutKTqNyfi2k4ESvbPMsHDGsuboO2DjYlZ7xiHcOrbRY8XUXRRYXq7aQi1PEXBA9en9OFTT9bjqm5QLBLPhrp2ZHjGubspB1bhMrHSoTDRF5wIwS89S4dBYXcK1iLD1viovlzcCUNrnmXBaT2dZq/t6d0VWkqnmABkmPRAkDRMrS22HMg4SbFrNgzfqB18D4HET+cYNlJB2WwoQuy+WlJqcBHURAwC4MNkhFrnd7ny5TxvGBjLI8Eha2lWtXppJkXi5l1XNzd26w1EPYK1yJDKs21dU2N6xLp0TewOMRgtN6zqGihByd1TbG9U9+RVGTitSiKBqUGIyTLy8N8tmP7xDMF8NxZ6IgPoCW0ktkdGRJdEUfRgM0/ccA41On3derlcCBv9N8bgUAo85fd6avg/cAXe1y+8JMeBW9OtK6vI5qzK0NrU8CyChaDIoOUSzclQtKBmfWSs+ljMBmBeTJr42eRjFahoarAZUmKIxlpg0GQnip5x+z1pnwPtcksVGBvwmfdrNyrLuj5BC6epGJFUJGoqCjBUgFovpnyUrfgCQ6tuYgmlidUXHclWdOzu0NrU8y1DHM/YyCszfhgXfeyGF7XI0O4ZvfAoKr2emwgeympGV1ap94cKODl2fAOA189Z8cbkm2icEvKpAEcsIkjchAx/DdBB4eeu8xX+x2683VO4VwwZsvCEtFrI2Wz7RHNverZeMBaCqa9PHGTrjH7V+r8rdzBLxUOzvzDm5DNpAmrg6084EGJdlIUWljyIhJ3brx5sf2qjr+B4sKQEPIXDc6ffcnUkI9N60NUXuIMDU9dkQwmZJsrZ1TkRZ5tZkDLMjcVGTs4uLZc3Rd7r1kvMBGFjh9oEA/KRq87B2S145xnA8HJ3KwPWwmYKdCSs10FlLQ7FXs5gfLI0TahNztv79eSenN1ePNz+00VHWeTEUlav3hoDzWROra331M7NZDdrC0ft1HScDiEJVIyfF+8x8deVWee5jociHmc7ZBxEb5i9k0OZsx883eUnSMPa6sWVa96CHQGQnlnAtBE1LzI38NZu5J06bOKSbS2sBHg2mIwFUMmMzQO8KwcvjoehK5Gjz6A64q5MstsI4Z4DdiOp+J29ZOmqCNY7qLYffA6b/sNGNASwEy1sSTbGiLxOfSoJJij0I35IIt9zRfxLZJ+9pWly++itBNJ8BOzaATgIWaEx392WzKjZcja5K1irXQZEoigRGx+dGjY+JRUC/5OkZN23ySCH1CADLOW+Avto4iJAufmk11q2fIGfA8yAY3zdqwMD6tnD0OOTodZMv+i1R09jrxpZp+kGzMswbrAN4AowHSe5+NN4cL9jRqyZY4xi0edhvzUzLzHRrW1PEzJWu4PR7pi7n1PpxEBQGkOnxbweARwjyD6OHnfJMMBjst6NWrX/ycQS5AFCXggfwqaOs89iBEDFUkFRt468aP4jLKn7BQADZpVzbBuZ2Bj2pkXyyNRxT3dFnTK1/8nEC+nW98lq44mV/ItzSlA9Zck1Bc/WN90/6BkPez0CuAis+YqanieQaBq0liXWfdVas3TsvnhVGNzaWjNC2j5bM5xPRBAAXwPLvip/sTXlb1O/+PooiWaNrmmcCdNzOhNPyMLzkVEDohyDehlQZ9x0E3pOOhYmqmFFBwFFIVTQZCXW2TSPW6Q55wbLZsdxUB+0HikIBgFS17JVb3nKD+RYApxRangzYQJq8IE3+46KmaBRgL8g5tX4sBP0E5mnjigImrJSaY+Ky2Q9bcikrJopRAfZQ6/OcSoKvBdMUwHJGzP6EASz8LFkRsLvPKBaKWgH6qGloKK+qTI4DyEPMTgAFj8Ej4EVJ9OO2UMSyH2ExMiAUYG/G3DClqizZdSlLuhzgsUht2PqT5xi4vy0c/RMGyE5fxYBTgP1xTXcfix7tAin4fGI6E+BTYD2jtxV0gF4lcKuQ8k+PzYutyeHYBWfAK8D+uN1urXMovs5CnCgljiXiY8F0NIAhDAwhwhAwSpFSkgqk/Ad2gtAFxlYAG5DK3/smg1/XOjtebF3QahpdPFD5/+gaDAItuDSdAAAAAElFTkSuQmCC',
      title: 'Desain Elegan & Fresh',
      description: 'Pilihan desain modern dan elegan yang dapat disesuaikan dengan tema undangan Anda'
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Kustomisasi Penuh',
      description: 'Bebas request perubahan desain sesuai keinginan hingga Anda puas'
    },
    {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAGD9JREFUeJztnXt8VNW1x39rn8mLR1ECglYttvaK0eIrUBWvH2oVyGOCtp5MgoVSsXkht63PanvtXGurtw/bXmQSctUWVMgwbVGSSUCpcluBFkSt2qDVVqpCSSXWCiQkmbPX/WOSQJI5+5yZnHmFfD8f/mD2Pnuvyf7NOfvsvfZahBHItVVl00Is80D0SRKYBsaZDDoF4FwAkwBk9f4b03tJB4Cu3n8HAWpnQhtYvkMQewn8V0Norc0r1/4tOd8oflCyDRguhTX6VCG1y0B8BYCZBMxgYEKcuvuQGK+wwHZhiGeZD29rrG/siFNfCSHtBDDHO8c1/sCpVzLJ+QAKAZyXRHO6APo9gZ8FyWcPnfL+77d6t4aSaE/UpI0ASqrKLmLixUwoB2NKsu0x4QCAtZBY07TK/8dkG2OHlBbAvIovnZrh6imFxGIQLk62PdHAQCtAa5iM1c2+wIFk22NGSgrAvaz8PGZ5FxgeAK5k2zNMQgRqENK4/6lVgdZkGzOYlBJAcaXnAgjcCmAhAC3Z9jgMAwgS4d5Gn39Xso3pIyUEUFypX0aC7mHQ/Dg0bwDYx8C7BG4HiYME/ieYB07WiFzMmAhwLoNyCTgTwMcBCIftYQI3M/O9TXWBnQ63HTVJFUDBcn2y6BE/IMKXHbGF0AbGDgJeAvgVIn5tX+jkv+2ur++JpTld1zO7JuNMKbXPAHJGeB5CVwI4adi2AszAo5mi+84NKze0O9BeTCRFAF6vV+xqe/0mAt8PYOIwmjoE4i0AWmC4tjatWvumQyaaouu6dnSyuFgyXUXgqwBcgWMLSjFA7US4s9HX8CjCj4mEknAB9L7O1TLw2Rib6GZGCwTWSO2jYMuKli5HDYySguUFWa6e8cVMWEygAgYyYmqIaAcMrk7062MiBUDFNaW3g+l7iG1mvwuMNSRFQ2P9uoNOG+cEBcv1ySIkykBYTIz8aK8noEcy3xWsW/8gEnQ3SIgArlt2XW5IZqxmUFEMl2+BlPc0rQrscNywOFJUU3Y5Md8FoAjR/52bMkT3kkTMDeIugOIqfRaT8BMwLYrLJIDmVHtlioWS6vIZEvI2RP9q+65gLt9Yt35bnEwDEGcBFFd7bgfwfUR3y29hwq1Bn39PnMxKCu5l5eexlA8CmGv3GgJ6GPhmU63/wXjZFS8BUHG150cAbonimv0g3NXk86+Jk039hDeUpiyVQAEACKDl0NS2RxKxkVNcU+oG00MIrzPYg/BQ/innfs3r9Uqn7XFcALquZ3ZOEqsBlNm8JARinzh69NsbH914yGl7BjPHO8c1rm1KC4CrBxVtOTylrSARIph726KxmR09tyM8R8i0cw0Bvz7UmXPD1l/84qiTtjgqgJIbS8bLzJwNIHze5iV/FkxlG+saXnLSDhXuKk8lE+oilRGjqrHOvypRthRV65cQRAOAs+3UZ+JnxoC/EPAFDjtlg2PLnAXL9ckya8xzdgefmdaJrs78RA4+APTd9qMtiwfB2sBuw+W6hInW26lPTNd0QDznriif5JQNjgig5MaS8VpIawH4EhvVj4Lw9WBdw8JE3PIHQ2TuLaQqixctK574KOhr8CC8HG7pXUSMfOmSLSU3lox3ov9hC6BgeUGWzMzZYHPw34XEpU0+/8+G2+9Io8nnXyOYrgCwz6ouMfKN7Oxf6bpua/6gYlgC8Hq9QhgT1ti87e8hQ16RLp4yyWBjXcNLUmizQXjdqi4xXdM5Saz2er3DGsNhXfzCgT0PEnOpjaq7yBBXNtYH3hlOfycCzSvX/q2nS84GsN1G9bLdbXseGk5/MQuguNpzOwhfs6xIaO4em/m5VF2/T0U2PxL4oHts5lwCb7Kqy0B1cbUnmvWWAcQkgJKq0tkIr/BZ0fL30IRrn/7RY0di6edE5ukfPXZkv3FSiR0REPBAcaV+WSz9RC2AeUv1iZLoCVgu79LOHJKlsTpjjALsrq/vgdH5RVg8DhjIgBD+WF4PoxUAZWTSzwF8wsKg1gzRVejkgoVjMIyYypJEY31jR4boLgFgtTdyBrvkakS5uBeVAIqqy+4AqMSi2j4WWmEy3ZxUMPBGLGXJZMPKDe2GyzUXgHoSzSgsqiqNaj5gWy0lVWUXSeKdUN/6j0LiUjuvegsq9TypafMYmABD7sw/NW9TPDY7IvVrCPEiwmcDj6dLk/LiRLhu97rEFRBhJgH/kuBNdnY/e8dgO4BsszoE9LDETLuv27YE4PV6xQv/eP15MCsnGgyqDNY21Fu1V1TlqSbCCgzcH3/acH1UkggXr6Kq0nkEPAyi0wEAzO8xcFOwbv3mePc9Z8mS7LFjOjYS0zXHfWwAfHNT7fqIexTH467x1DBjpboW7cyfMv0yOz8oW4+A3Qf2fNVy8InW2xn8BZV6XoTBB4C5IvSxu+3YM1yCdes357TzNMF0sWC6OKedpyVi8AFgXM7Rbw0afADQAHrIXVE+3er6Rp/fB2CtuhbP2nWgdYkdeywdNa5bdl1uj8R9FtXekpr2VTsdGkLMh5lnDKEQwHfstDNcAoGAASChG1Fh2MwtTpOanA9YrwLmkKzsZHEJgHPM6hCJH7gryjdarb9Y3gF6ZOYPET5Tb0ZIMJW2rHjiI6u2AEB1dJvYEX/7VEexGUW2vn/AFzjMkDcAUPgucC4LtlyrUQrAXe25FMASVR0i/CyaLV2S/AfzQpiXjRx+b1YgQaZlgwnWBnYToF4GJl7qrvHMVFWxuAPwd6CaKDK/lw3pVbcxkPxT8zYBeDpC0YeScG80baUjAvJeAB9GKNrc7FsX1TyEujrvgXr3UDDjP1VtmHqphg9w4AdQCICAGzfUBqLa3du6dSt/6rIzA4KzDSaME0AngZqlwKLmlf4/R9NWOvLGC63t02fmPclEJwMYx4S/EHO9kXHo5rd2vhWVO9obL73R/en88/cT4XpFtXM+PTOv6c0XWv8eqdB0cItrSn8NpusUDW9uqvXH4zDnKFHiri5tUR2sJSDQWOuPuGsb8S2g14V5gaJPyYRvRGlnSqHrutaVq80AgKx245Xet4K0xND4DmHQPJj8oBn4YlGN59xIi00R5wAs5d1mZQj38qt09tsvqiqd15lLeyXxi5L4xc5c2ltUVTov2XbFSvNDgVcBPKWoIojxzYgFgz+YV/GlUwGonDyYmO6PzsTUIbwQRU/1rwICANHpRPTUgko9L4mmDQsp6XsWVRYW1uhTB384RACZrtANUCwQEbg50Z68ThIisQxD9wEAIKu3LC1pXtXwgoXvgEuDVj74wyECYOZFqo6Ikba/fgAg1eqZoiwdYMnK12hmXjz4swECKKzRLwQwQ9HGrngfVow7pDigqSpLA8InqGm3osqFJdXlA8Z3gAA0Fl9W9sCI+7m9UYYJ8WOqYgPGgDt8vwDmeOe4WHGej4AekqJh+BaOEk8MTa4lwNQNj4gWzfHO6Z/j9Qtg/IFTrwQwZJbYBwPBUc/e1KdlReB9Bswng4wpY9um9m/t9wtAkqE+F8c0evtPExhQPgbouDOQ4tiHpBLAoZx2I+iAbaMkgCOdOY0AFK74PFAAvQsE5lG3ibcEAoFuxywcJa70xhB4VlHlgj4XcgEABHG5RZstDtk2SoIgUswDAEKGnA30CYAxW9WYESKVmkZJQSTwnKqcJY4JAKBZpjUJbS31/r84aNsoCSDo878OQPHWFh5zAYAI/BnTeoy0is83Sj8MsOJIGc8AAOG+WZ+mdNRMiufsKE7AoJcVxScXLL/hdCENzWILlF9x1KpREoZg9di5jFCesIrgScSvOWrVKIlDan9SFTPzJwURn6WoY+wLnTzicuWdKISyPnwb4bC7ESFgmgArI1buGz3fn760rGjpAvN+s3IGTRPhjJpmFfBuXCwbJXEIYTqGBJwiADY99kXA+/GxapSEwWy6FsBArovAE9nseADRB1btHx94mQhjTTsjZkh608VyZSqmT0sFFlTqeSESyyD408RkemaDGUfsBrhmRrt5S5jkAsg03w0xKw989gVeZsLVVoEGiAkgXGOQWFpUVbogUcex04WiqtJ5BtFTBGSB1X9NIoCBBePaplw/xztHGeCaBH+kaC9HsDJaNSuDNYw/MGUphkbdtiKLgId1XU9F/7vT9Rp9XKI71XVdI+BhRPZWVnF17xiYw6QawywBlQAIyi3gmIMrE53edyonxTi7g8Ump+Lw2qUrV5sx4JxCFFiPgbUATiiY8S9VOQGzZVZOMBl3gmQgAMWvnNXJDESsfgLM72W1G0lZYrZp8793smhOlAiy2o1XwPxeLNdafx9WPVa6BKkEAFI+kw5NbXsEwBa1AUM7ZeCmZB3GDNtM/2ejasJEEAgEDAZuAhBtgKwtvWNgDqkFQO7q0v0MOjXyxfRok69BOclIx9dAd4V7DLQxTQx8zqouA9u0rs6CROQ2iMdrYFGV5+dEplFe9lFxtedVAOebdLWxqXa96ph42pKqInAad3VpkyJf4x8F1F4jjqUmSTUa6xs7YHQUk4XrFBCeGBpZOY5l6UgkDMpVlLYLi+XemF5N0oUTRARnmBfR+0KCVdu9H3ciLUkqM5JFMGfJkmwAked3AAi8VxDEXkUbWufEDGVk8JHASBXB2DGdZ0ER6YWBvQJSvq1shaTJBHFkMRJFQCDzwz4AiOivQrpcSrchQKbikm1cGGkiIIuxI0GvieaVa99B5MCFfa1c7LRhqcxIEgEzXago/mDjQw37BQAG8Kp5PboyRXfu4sYIEQEBpDry9wrQN0EgqMK+nHR0sjih7gJA+ovAvaw8D2DTNQBCOGazAABhCOXZP8l0lbPmpQfpLAKWPEdVLiG2A70CYD68DYqNCAKfkAIA0lcEBKnyE+BM0bUN6BVAY31jB9ShymcXLC+I1ltlxJBuItC/oecwSLXH8XJfUq9jiwQsVV9urKtnfLFD9qUl6SSCzi6tBIC5rye434egXwBMFvMAkDKA5IlAuoiAWKrHiiII4MiUAzsAHDC7RhAKC5brk50wMJ1prG/syCZZAuB3VnUJmM2ZOU3uCrfpr9FprqtadApAcxVV9me/f+zIf78Aeh0LTLNRMZAhQsI0juCJRMAXOJxDshA2RMCEK6GNXZUAswAA3dS9kIEMc4Pw+PHeWAM3CqRFJFDCkFizJypRiQAcMVJ3PCCG8vYvXfLx4/8/QAC92SZNU8AQI99do18xLAtHEFGIQAgDqlPYjlBUU3a5cume8WJvboFjhg2pw+pYswxxV8wWjkBsikBKDepdVwcgZmXORaahASSHCkDwE1Dlo2MUuJd5TrilYRV9IiDGbyOVE2htsy9gOsF2guIqfRYA08kfAT1aj1g3+PMhAmj2BQ4QSBUUmlgiISle04mAL3AYsqOAQI/jWFAGSaDHs7ONirgbQPQtiwprNz68rm3Ip5Gq9mbYfhXm3iSShJjRuHKdhS/BiUlhjT5VYzHNILk33r98ACiu9FwAgZdgngXOEJDnbawNvDG4wDxtXLXnlwC+aFbOxM8EfetV75ujJIji6tLfAMoNu4amWv+QdDGAIjeQJHmfYPEFmIiEmK4pqvbowVp/IDpzw86K48d03M2SikA4GcAOAXlvJIWORNwV5dOl4HuI+FKAPmBw8Ehnzv29MX6jorjKcwMA1eCzgDBN86M8iF5c4wmCUaiocuCoIadvqQ8oD1wej9frFbv+0bopQgr1DwXkpSNdBO6K8umsyR3AkETZT+dPObfA6/WaBnUaTMHyGz6mhUJ7AJymqPZkU63fNAGo+nSwlP8FRZQpAFOzBEWV7n1X2+sFEQYfAE6SJJR5bkcCUvA9GDr4ADB3d9ueqHIXukKh+6AefEkC31W1oRRAU11gJ4BHVXWIaHlRtX6Jqs5A2DQuMTEutd9OekLEnzUrYyLTssG4azwzGaix6K2+caX/RVUNy/gAPd3yTqhPD7kIouHqCt003OyADolMHVAZsIxJlP7QP01LpL3vf+3Xrz2JGQ1QJP8GqD1DdH3bqi1LAWx+JPABwfK9/+wcTfyvVVsAIMPJDSMfDWdOWFYSXde1kqqyi0qqyi5KpNMrw/Q7hogMW3GTQl1ZDwP4pLofeWuf04cKWxFCGmv9jwBQRJ4GGNCLqjzVVm2Fcw7zzRgqgs1GxqEH7NgzXJKZO1i6Pvo+gMEDHSLGzXYmwEXVnuVQvJ6HoeeDtett5XiyCu7VT3Gl5wIS2KXcagSOCqbL7aSWdVeUT5eanE/ME6TQ/tDsW7cZYRf1uNK7yPUihgZk6tKkvDgRsQu8Xq/Y3bZnHjPPgqAPBctNdga/sLIsXwh+HupgUt1Sk/mDN33MsC0AAHDXlN3GzD+0qLbfxTT7ybqGvdG0nSiKqjwriSJPnpjhC9b5UzJ/8IKasjMM5m1QnvYFGPhGsNb/U7vtRhUkqtHX8GMAT1pUOy1E/EzYMyX1SMfcwe6K8kkG+GlYDD6ApmCt/2fRtB1tlDBmaDcysNei3tk91N2UkpG20ix3sLvCPYZdvBGM6RZV380Q3UsQ5WM06jBxwdq1/yQpF6rSk/Yy8yhTYKTHF4gnuq5nsjZmA5gvs6jaLQXpdmb9g4kpTmDTqsAOEN1pVY9B849Ooqfm3rbINHjUKJHRa/RxnZNEIxR7/P0Q7mhe2fCHWPqJOVBko6/hJ8z8E6t6DJqfeaT7uVGPYvvMW6pP7IT2NOwMPnhlky+65/7xDCtSaLBu/a2ArZTyMzVD/NZdoauSU4wCoHDZwk9kZIrtNm77YKZ1+VPy/mM4/Q03VCznHJRfZeJnrGtiOgvaVlJVdtEw+xyxFFXrlwhpbIe9t5HNB+THvhzN7mEkhh0rOBAIdItQ57Ugss4vSHS6JN5RXOP52nD7HWkU13gWE8TvoN7d62NXDsnrnUjn40iw6Mb6xg4KUQmAXTaqZ4Hx06KaMn/B8hs+5kT/0aAKFm0VSDoeXF2hTyiu9vwSjNUAcqyvoJ0Zorsg4AscdqJ/x6KFN9avO5hD8ipbjwMAxFyqhUK7o9tKHj6q4MoxB7+OEXeNZ2a2Jl6E5dp+P5tzyPh8LK97Zji68NG6q7X7wml5/p4ccTYRzNPRHmMigW46Z+b5H//UZRf+9q2dr0YbLDlqTiue/MfMI+Mux9DdtC2Hp7bdunfr3mE9U+0w97ZFY/MumP5dBj0CQBHJcwBr/25M8GypeyxqtzEVjq98tba2Gm++8Nqvz5l1/jgAVmnpgfB+xCWaNJb826zz3//zrj/FNYz83q175WnFk9dlHR63n8M7km8I4KeHp7bdahV42QmKa0rdWrdsBqgQNu/ABKzIn3Ju5bof/9jxCOtRbQZFS3G15xYCHrDYQRzMFqnJW+zuZqULvbupP7ETnPo4uonp9sa6hv+Jl11xFQDQ67rE8ANRnY1jAEEp6L5YV7hShcIa/UKNxd0MXI/o/t7vMFF50Neg9MMYLnEXABCe6WYLehhE10d7LQPbSNB3mlY2/CYetsWLkqrS2ZLomwCKEPXfmTf2dPNXNj8SiLuLXEIE0NdXUVXpLYLo/igfCX2X7ybGmlCGsa5lRSAlE1peV7XolB7RXQ6JxTEG2Oxm4M7eLd24O8cAiRUAgP5jTD7YmyAOgYAeBjaBaM3hjuymWA5TOMmcJUuyx2d3lDDRIgDzoThsY8HvpCaXJXruk3AB9PVbVFX6FSL6bwDDSUpxBMCzzGiBwNagz/864v/LoQWV+rmG0D5HkAW90biGEQKG/8HAHb0+fAn51R9PsgQAILzrlZGhPQDipXBmUeogwNsZ9DIRvUohei2U9eHbLStaYlpfKFhekOXqOuksdvH5BDkjHHuXLldF4IwCScAqCe1bwdq1pq7i8SapAuij19nxHgDFcN4mBrAfRO+AuZ1A7UzyX8ToHFCJkEMsJjA4F0S5YD4T4XV5x+1hxkah4V6rQxuJICUE0EfhzfpnhCFuB7AQcVikSjISQDNDeoO1gd3JNqaPlBJAH0U1nnOJcReAcsQ+qUoJwq5ztJZg3J+KB19TUgB9zFuqT3RlatcDvJiA2cm2JxoYaAVoDZOxOhFBImIlpQVwPCXV5TOY5GIwLzRNdJl89jN4LZhWB+v8ryXbGDukjQD60HVdO3IKzRZMBWDMB3ABkvc9GMDLAG1ioGXMQWN7slLixkraCWAw7orySVLjywl8BUCzAJ4B4OQ4dfcBgFfA2AnBz2dQz3Yn9+aTQdoLIBILasrOCEmZR4SzwHQWCGcCmEqMXCbkIux5kwGg7+DKYYTPOXQSox2Eg5LpgCD5DpjeJhZ/lRRqbaoL7EvSV4ob/w9xxJQ4VIvwIwAAAABJRU5ErkJggg==',
      title: 'Proses Cepat',
      description: 'Pengerjaan undangan yang cepat dengan hasil berkualitas tinggi'
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Harga Terjangkau',
      description: 'Dapatkan undangan berkualitas premium dengan harga yang bersahabat'
    }
  ];
  katalogItems: KatalogItem[] = [
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
    }
  ];
  steps: OrderStep[] = [
    {
      icon: 'fas fa-mouse-pointer',
      title: 'Pilih Template',
      description: 'Pilih desain undangan yang sesuai dengan tema acara Anda dari katalog kami'
    },
    {
      icon: 'fas fa-edit',
      title: 'Isi Informasi',
      description: 'Lengkapi form dengan informasi acara dan data-data yang diperlukan'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Pembayaran',
      description: 'Lakukan pembayaran melalui berbagai metode yang tersedia'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Terima Undangan',
      description: 'Undangan digital Anda akan siap dalam waktu 1-2 hari kerja'
    }
  ];
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
  ];
  faqItems: FaqItem[] = [
    {
      question: 'Berapa lama proses pengerjaan undangan digital?',
      answer: 'Proses pengerjaan undangan digital membutuhkan waktu 1-2 hari kerja setelah semua data lengkap dan pembayaran dikonfirmasi.'
    },
    {
      question: 'Apakah desain bisa disesuaikan dengan keinginan?',
      answer: 'Ya, kami menerima request perubahan desain sesuai keinginan Anda. Konsultasikan dengan tim kami untuk detail perubahannya.'
    },
    {
      question: 'Bagaimana cara share undangan digitalnya?',
      answer: 'Undangan digital dapat dibagikan melalui link atau QR code yang kami sediakan. Bisa dishare melalui WhatsApp, email, atau media sosial lainnya.'
    },
    {
      question: 'Metode pembayaran apa saja yang tersedia?',
      answer: 'Kami menerima pembayaran melalui transfer bank (BSI, BNI) dan e-wallet (GoPay, OVO).'
    }
  ];
  currentYear = new Date().getFullYear();
  
  toggleFaq(item: FaqItem) {
    item.isOpen = !item.isOpen;
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}