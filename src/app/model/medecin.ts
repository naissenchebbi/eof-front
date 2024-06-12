export class Medecin {

    id:number;
    matricule:String;
    nom:String;
    motdepasse:String;
    
    
    constructor(
        id: number,
        matricule:String,
        nom:String,
        motdepasse:String,
      
    ) {
      this.id = id;
      this.matricule=matricule;
      this.nom=nom;
      this.motdepasse=motdepasse;
    }
  }