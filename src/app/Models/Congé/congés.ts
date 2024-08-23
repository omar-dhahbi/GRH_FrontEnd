import { Users } from "../users/users";
export class Congés {
  user_id!: Users
  type: string = ''
  DateDebut!: Date
  DateFin!: Date
  NbrJour!: number
  photo:any
  CauseConge: string = ''
  status: string = '';
}

