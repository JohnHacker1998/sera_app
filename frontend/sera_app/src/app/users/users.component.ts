import { Component, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Work } from 'src/interfaces/Work';
import { WorkService } from '../Services/WorkService';
declare var bootstrap: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private workService: WorkService) {
    setTimeout(() => {
      $('#datatable1').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 25],
      });
    }, 1);
  }
  @Input({ required: true }) ELEMENT_DATA!: Work[];
  isVisible: boolean = false;
  result: Work = {
    id: '',
    description: '',
    salary: 0,
    type: '',
  };

  async updateItem(id: string) {
    // this.isVisible = true;
    const modalElement = document.getElementById('updateWorkModal');
    console.log(modalElement);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    this.result = await firstValueFrom(this.workService.getById(id));

    console.log('THIS IS THE SECOND', this.result);
    // let x = $('#updateWorkModal').modal('show');
    // console.log(x);
  }
  deleteItem(item: string) {}
}
