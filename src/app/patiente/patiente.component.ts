export class Patiente {
  nom : string;
  prenom : string;
  dateDeNaissance : Date;
  numeroNational : number;
  gynecologue : string;
  mutuelle : string;
  numeroDeTelephone : number;
  email : string; 

constructor(
  nom: string = 'Entrer un nom...',
  prenom: string = "Marion",
  dateDeNaissance: Date = new Date(),
  numeroNational: number = 123456123123,
  gynecologue: string = 'Grosdoigt',
  mutuelle: string = 'La mouutouelle',
  numeroDeTelephone: number = 12345678910,
  email : string ='monAdresseEmail@mail.com'

  ){

    this.nom = nom;
    this.prenom = prenom;
    this.dateDeNaissance = dateDeNaissance;
    this.numeroNational = numeroNational;
    this.gynecologue = gynecologue;
    this.mutuelle = mutuelle;
    this.numeroDeTelephone = numeroDeTelephone;
    this.email = email;
}
}