import { Departements } from "../departements/departements";

export class Users {
  id: number = 0
  cin: string = '';
  nom: string = '';
  prenom: string = '';
  tel: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  status: boolean = true
  photo: any;
  RaisonSociale: string = 'Carthage Solution';
  role: string = '';
  departement_id!: Departements
  adresse: string = ''
  NbJourConge: number = 45
}
