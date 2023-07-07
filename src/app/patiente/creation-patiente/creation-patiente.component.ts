import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatienteAddForm } from '../../patiente/creation-patiente/PatienteAddForm';

@Component({
  selector: 'app-creation-patiente',
  templateUrl: './creation-patiente.component.html',
  styleUrls: ['./creation-patiente.component.scss']
})
export class CreationPatienteComponent {
  model: PatienteAddForm = {
    nom: '',
    prenom: '',
    dateDeNaissance: new Date(),
    numeroNational: Number(''),
    gynecologue: '',
    mutuelle: '',
    numeroDeTelephone: 0,
    mail: '',
    ville: '',
    rue: '',
    numeroDeMaison: '',
    lieuDit:'',
    traitSpec:'',
    km: Number(''),
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/patiente/add', this.model).subscribe(
      (response) => {
        console.log('Patiente créée:', response);
        alert("Enregistré!");
      },
      (error) => {
        console.log('Erreur lors de la création de la patiente:', Error);
        console.error(error); // Ajout de cette ligne pour afficher plus d'informations sur l'erreur
        alert("Erreur voir Clément");
      }
    );
  }
}
