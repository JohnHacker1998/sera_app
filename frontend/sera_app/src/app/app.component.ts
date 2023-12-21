import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Work } from 'src/interfaces/Work';
import MatIconMod
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sera_app';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Work[] = [
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
    { id: '15', description: 'Phosphorus', salary: 30.9738, type: 'Home' },
  ];
  dataSource = new MatTableDataSource<Work>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'id',
    'description',
    'salary',
    'type',
    'update',
    'delete',
  ];
  updateItem(element: Work) {}
  deleteItem(element: Work) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
