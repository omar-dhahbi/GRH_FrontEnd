import { Users } from "../users/users"

export class Contrat {
  id!: number
  user_id!:Users
  NomContrat!:string
  DateDebut!: Date
  DateFin!: Date
  url:any
}
