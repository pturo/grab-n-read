import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadTheme();
  }

  setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  loadTheme() {
    let theme = localStorage.getItem('theme')!;
    switch(theme) {
      case 'theme-dark':
        this.setTheme('theme-dark');
        break;
      case 'theme-light':
        this.setTheme('theme-light');
        break;
      case 'theme-green':
        this.setTheme('theme-green');
        break;
      case 'theme-blue':
        this.setTheme('theme-blue');
        break;
      case 'theme-orange':
        this.setTheme('theme-orange');
        break;
      case 'theme-yellow':
        this.setTheme('theme-yellow');
        break;
      case 'theme-red':
        this.setTheme('theme-red');
        break;
      default:
        alert(`An error has occurred during changing theme to <${theme}>! I set theme to light.`);
        this.setTheme('theme-light');
    }
  }

}
