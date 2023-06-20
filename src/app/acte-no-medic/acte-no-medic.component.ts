import { Component, OnInit, ViewChild } from '@angular/core';
import { ActeNoMedicService } from './acte-no-medic.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-acte-no-medic',
  templateUrl: './acte-no-medic.component.html',
  styleUrls: ['./acte-no-medic.component.scss'],
  providers: [ActeNoMedicService]
})
export class ActeNoMedicComponent implements OnInit {

  displayedColumns: string[] = ['titre', 'action', 'prix'];
  actesNoMedic = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator:  MatPaginator | undefined;

  constructor(private acteNoMedicService : ActeNoMedicService) { }

  ngOnInit(): void {
    this.getActesNoMedic();
  }

  getActesNoMedic(page: number = 0, size: number = 84): void {
    this.acteNoMedicService.getActesNoMedic(page, size)
      .subscribe((data: any) => {
        console.log(data);
        this.actesNoMedic = new MatTableDataSource<any>(data);
        console.log(this.actesNoMedic);
        if (this.paginator) {
          this.actesNoMedic.paginator = this.paginator;
        }
      });
  }
}

