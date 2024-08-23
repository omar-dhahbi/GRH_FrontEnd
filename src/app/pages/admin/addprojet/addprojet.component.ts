import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clients } from 'src/app/Models/clients/clients';
import { Projets } from 'src/app/Models/projets/projets';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { ProjetsService } from 'src/app/services/projets/projets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.css']
})
export class AddprojetComponent implements OnInit {
  constructor(private projets: ProjetsService, private route: Router, private users: UserService, private cls: ClientsService, private snack: MatSnackBar) { }
  projet = new Projets
  clients = new Clients
  // user = new Users
  client_id: any
  user_id: any = []
  employee: any = [];


  ngOnInit(): void {
    this.cls.getData().subscribe((data) => {
      this.client_id = data



    }, (error) => {
      console.log(error)
      Swal.fire('Error', 'Error in loading data form server', 'error')
    }
    )
    this.users.getData().subscribe(data => {
      this.user_id = data;
      for (const element in this.user_id) {
        if (this.user_id[element].role == "employee") {
          this.employee.push(this.user_id[element])
        }
      }
    }, (error) => {
      console.log(error)
      Swal.fire('Error', 'Error in loading data form server', 'error')
    }
    )
  }
  AddProjet() {
    this.projets.addData(this.projet).subscribe(
      (data) => {
        // console.log(data)

        Swal.fire('Succes !!', 'Le Projet a été ajouté avec succès', 'success').then((e) => {
          this.route.navigate(['/admin/projet'])
        })

      }, (error) => {
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]

        this.snack.open(erors + '', '', {
          duration: 3000
        })
        console.log(error)
      }
    )
  }
  close() {
    this.route.navigate(['/admin/projet'])

  }
}
