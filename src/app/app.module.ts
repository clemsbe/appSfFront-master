import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CreationPatienteComponent } from './patiente/creation-patiente/creation-patiente.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Patiente } from './patiente/patiente.component';
import { ListPatienteComponent } from './patiente/list-patiente/list-patiente.component';
import { ActeNoMedicComponent } from './acte-no-medic/acte-no-medic.component';
import { SearchPatienteComponent } from './patiente/search-patiente/search-patiente.component';
import { ActeMedicalService } from './acte-medical/acte-medical.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ActeMedicalComponent } from './acte-medical/acte-medical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreationPatienteComponent,
    PageNotFoundComponent,
    ListPatienteComponent,
    ActeNoMedicComponent,
    SearchPatienteComponent,
    ActeMedicalComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,




  ],
  providers: [
    ActeMedicalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

