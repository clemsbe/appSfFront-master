export class PatienteAddForm {
  nom: string = '';
  prenom: string = '';
  dateDeNaissance: Date = new Date;
  numeroNational: number | undefined;
  gynecologue: string = '';
  mutuelle: string = '';
  numeroDeTelephone: number | undefined;
  mail: string = '';
  ville: string ='';
  rue: string ='';
  numeroDeMaison: string ='';
  lieuDit: string='';
  traitSpec: string='';
  km: number | undefined;

  constructor() { }
}
