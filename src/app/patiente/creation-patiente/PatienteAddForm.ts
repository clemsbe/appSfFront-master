export class PatienteAddForm {
  nom: string = '';
  prenom: string = '';
  dateDeNaissance: Date = new Date;
  numeroNational: number | undefined;
  gynecologue: string = '';
  mutuelle: string = '';
  nTelephone: number | undefined;
  mail: string = '';

  constructor() { }
}
