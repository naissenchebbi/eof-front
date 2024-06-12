export class Collaborateur {
    id: number;
    matricule: string;
    nom: string;
    tel: string;
    motdepasse: string;
  
    constructor(
      id: number,
      matricule: string,
      nom: string,
      tel: string,
      motdepasse: string
    ) {
      
      this.id = id;
      this.matricule = matricule;
      this.nom = nom;
      this.tel = tel;
      this.motdepasse = motdepasse;
    }
  }
  