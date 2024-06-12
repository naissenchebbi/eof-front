export class Bon {

    id: number;
    matricule:number;
    nom:String;
    date: Date;
    medecin:String;
    photo:String;
    
    
    constructor(
        id: number,
        matricule:number,
        nom:String,
        date: Date,
        medecin:String,
        photo:String,
      
    ) {
      this.id = id;
      this.matricule=matricule;
      this.nom=nom;
      this.date = date;
      this.medecin=medecin;
      this.photo=photo;
    }
  }