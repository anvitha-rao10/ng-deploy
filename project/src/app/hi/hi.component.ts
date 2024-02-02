import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hi.component.html',
  styleUrl: './hi.component.css'
})
export class HiComponent {
  userName = '';
  submitted = false;
  greeting = '';
  submitForm() {
    this.submitted = true;
    this.greeting = `Hi, ${this.userName}!!!!!`;
    console.log('Hi');
  }
  

}
