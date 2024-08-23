import { Clients } from "../clients/clients";
import { Users } from "../users/users";

export class Projets {
  id!:number
  user_id!:Users
  NomProjets:string=''
  client_id!:Clients
}
