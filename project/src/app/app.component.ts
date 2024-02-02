import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HiComponent } from './hi/hi.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HiComponent,HeaderComponent, FooterComponent, DetailComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
