import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit, OnDestroy {

  private scrollListener!: () => void;

  ngAfterViewInit() {
    // Listener para el scroll
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);

    // Lógica de abrir y cerrar menú (mejor asociarlo directamente en el template HTML con (click), pero si quieres hacerlo aquí):
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir?.addEventListener('click', () => {
      document.querySelector("#nav")?.classList.add('active');
    });

    cerrar?.addEventListener('click', () => {
      document.querySelector("#nav")?.classList.remove('active');
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  handleScroll() {
    const navContainer = document.querySelector('.nav-container');
    const navMenuItems = document.querySelectorAll('.menu');

    if (window.scrollY > 50) {
      navContainer?.classList.add('scrolled');
      navMenuItems.forEach(menu => menu.classList.add('scrolle'));
    } else {
      navContainer?.classList.remove('scrolled');
      navMenuItems.forEach(menu => menu.classList.remove('scrolle'));
    }
  }
}
