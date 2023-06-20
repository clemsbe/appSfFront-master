import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';

@Component({
    selector: 'page-404',
    template: `<div>
      <mat-card>
        <mat-card-header>
          <mat-card-title>ERREUR 404 PAGE NON TROUVÉE</mat-card-title>
          <mat-card-subtitle>Cette page n'existe pas</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image
          src="https://images.pexels.com/photos/1853537/pexels-photo-1853537.jpeg" width="600px" height="770px" 
          alt="Ambulance dans la neige">     
      </mat-card>
    </div> `,
    styles: [ 
    ] 

})

export class PageNotFoundComponent {


 }
