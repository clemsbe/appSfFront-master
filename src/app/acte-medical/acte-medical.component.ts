// import {Component, OnInit} from '@angular/core';
// import { ActeMedicalService } from './acte-medical.service';

// @Component({
//   selector: 'app-acte-medical',
//   templateUrl: './acte-medical.component.html',
//   styleUrls: ['./acte-medical.component.scss']
// })
// export class ActeMedicalComponent implements OnInit{

//   length = 5;
//   pageSize = 3;
//   pageSizeOptions: number[] = [5, 10, 25];

//       constructor (

//         private acteMedicalService : ActeMedicalService
//     ) {this.getActesMedical()}

//   displayedColumns: string[] = ['id', 'action', 'prix'];

//   dataSource = this.getActesMedical();

//     actesMedicaux : any[] = []

//     getActesMedical() : void{
//       this.acteMedicalService.getActesMedical()
//         .subscribe((data : any ) => {
//           this.actesMedicaux = data

//         })
//     }
//     ngOnInit() {
//       console.log(this.actesMedicaux.length);
//     }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActeMedicalService } from './acte-medical.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-acte-medical',
  templateUrl: './acte-medical.component.html',
  styleUrls: ['./acte-medical.component.scss']
})
export class ActeMedicalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'action', 'prix'];
  actesMedicaux = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private acteMedicalService: ActeMedicalService) { }

  ngOnInit(): void {
    this.getActesMedical();
  }

  getActesMedical(page: number = 0, size: number = 84): void {
    this.acteMedicalService.getActesMedical(page, size)
      .subscribe((data: any) => {
        console.log(data);
        this.actesMedicaux = new MatTableDataSource<any>(data);
        console.log(this.actesMedicaux);
        if (this.paginator) {
          this.actesMedicaux.paginator = this.paginator;
        }
      });
  }
}
