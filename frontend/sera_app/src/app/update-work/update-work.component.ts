import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-work',
  templateUrl: './update-work.component.html',
  styleUrl: './update-work.component.css',
})
export class UpdateWorkComponent {
  @Input() id?: string;
  @Input() description?: string;
  @Input() salary?: number;
  @Input() workType?: string;

  types: any[] = [
    { value: 'type-1', viewValue: 'First Type' },
    { value: 'type-2', viewValue: 'Second Type' },
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  updateWork() {}
}
