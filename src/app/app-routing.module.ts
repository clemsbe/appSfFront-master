import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActeMedicalComponent } from './acte-medical/acte-medical.component';
import { CreationPatienteComponent } from './patiente/creation-patiente/creation-patiente.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPatienteComponent } from './patiente/list-patiente/list-patiente.component';
import { ActeNoMedicComponent } from './acte-no-medic/acte-no-medic.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
{path: '', component: HomeComponent, canActivate: [AuthGuard]},
// {path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent },
{path: 'acte-medical', component: ActeMedicalComponent},
{path: 'acte-Non-Medical', component: ActeNoMedicComponent},
{path: 'creation-patiente', component: CreationPatienteComponent, canActivate: [AuthGuard]},
{path: 'list-patiente', component: ListPatienteComponent, canActivate:[AuthGuard]},
{path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
