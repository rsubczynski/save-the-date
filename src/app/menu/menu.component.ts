import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[];

  constructor() {
    this.items = [{
      label: 'Menu',
      items: [
        { label: 'Aktualności', icon: 'pi pi-fw pi-home', routerLink: '/news' },
        { label: 'Lokalizacja', icon: 'pi pi-fw pi-globe', routerLink: '/location' },
      ]
    }];
  }
}
