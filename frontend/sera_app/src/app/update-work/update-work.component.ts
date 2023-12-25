import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-work',
  templateUrl: './update-work.component.html',
  styleUrl: './update-work.component.css',
})
export class UpdateWorkComponent {
  types: any[] = [
    { value: 'type-1', viewValue: 'First Type' },
    { value: 'type-2', viewValue: 'Second Type' },
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
