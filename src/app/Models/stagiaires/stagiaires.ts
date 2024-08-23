

export class Stagiaires {
  id!: number
  Cin: string = ''
  Nom: string = ''
  Prenom: string = ''
  telephone: string = ''
  Email: string = ''
  Ecole!: string
  TypeStage!: string
  NiveauEtude!: string
  class: string = ''
  DateDebut!: Date
  DateFin!: Date
  sujet: string = ''
  DescriptionSujet!: Text
}
