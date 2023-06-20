import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(
    private route: ActivatedRoute,
    private router : Router,
  ) {}

goToCreatePatiente():any{
  this.router.navigate(['creation-patiente']);
}

goToListPatiente():any{
  this.router.navigate(['list-patiente']);
}

goToListSoinsSf():any{
  this.router.navigate(['acte-medical'])
}

goToListNoMedic():any{
  this.router.navigate(['acte-Non-Medical'])
}

}
