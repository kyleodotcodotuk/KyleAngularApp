import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'website',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './../styles.scss'
})
export class AppComponent {
  name = 'Kyle';
}
