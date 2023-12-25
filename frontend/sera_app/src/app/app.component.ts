import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Work } from 'src/interfaces/Work';
import { WorkService } from './Services/WorkService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  title = 'sera_app';
  // dtOptions: DataTables.Settings = {};
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Work[] = [];
  // dataSource = new MatTableDataSource<Work>(this.ELEMENT_DATA);
  // displayedColumns: string[] = [
  //   'id',
  //   'description',
  //   'salary',
  //   'type',
  //   // ,ng
  //   // 'update',
  //   // 'delete',
  // ];
  updateItem(element: Work) {}
  deleteItem(element: Work) {}
  fillTable() {
    this.workService.getAll().subscribe((result: Work[]) => {
      this.ELEMENT_DATA.push(...result);
    });
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.fillTable();
  // }

  async ngOnInit() {
    await this.workService.getAll().subscribe((result: Work[]) => {
      this.ELEMENT_DATA = result;
      console.log('before', this.ELEMENT_DATA);
    });
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   // Add more DataTables options as needed
    // };
  }
}
