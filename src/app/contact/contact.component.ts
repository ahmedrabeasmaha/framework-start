import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  faStar: IconDefinition = faStar;
  name: string = '';
  age: string = '';
  email: string = '';
  password: string = '';
}
