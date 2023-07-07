import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ListPatientesService } from './list-patiente.service';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './list-patiente.component.html',
  styleUrls: ['./list-patiente.component.scss'],
  providers: [DatePipe]
})
export class ListPatienteComponent implements OnInit {
  displayedColumns: string[] = ['dateDeNaissance', 'nom', 'prenom'];
  listPatientes = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private listPatientesService: ListPatientesService, public datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getListPatientes();
  }

  getListPatientes(page: number = 0, size: number = 100): void {
    this.listPatientesService.getListPatientes().subscribe((data: any) => {
      console.log(data);
      this.listPatientes = new MatTableDataSource<any>(data);
      console.log(this.listPatientes);
      if (this.paginator) {
        this.listPatientes.paginator = this.paginator;
      }
    });
  }
}
