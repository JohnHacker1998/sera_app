import { Component, OnInit } from '@angular/core';
import { Work } from 'src/interfaces/Work';
import { WorkService } from './Services/WorkService';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private workService: WorkService) {}
  title = 'sera_app';

  ELEMENT_DATA: Work[] = [];

  //isVisible: boolean = false;
  updateItem(element: Work) {}
  deleteItem(element: Work) {}
  fillTable() {
    this.workService.getAll().subscribe((result: Work[]) => {
      this.ELEMENT_DATA.push(...result);
    });
  }

  async ngOnInit() {
    await this.workService.getAll().subscribe((result: Work[]) => {
      this.ELEMENT_DATA = result;
      console.log('before', this.ELEMENT_DATA);
    });
  }
  showModal() {
    // this.isVisible = true;
    const modalElement = document.getElementById('exampleModal');
    console.log(modalElement);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
