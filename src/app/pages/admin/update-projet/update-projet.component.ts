import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Projets } from 'src/app/Models/projets/projets';
import { UserService } from 'src/app/services/admin/user.service';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { ProjetsService } from 'src/app/services/projets/projets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {
  constructor(private ps: ProjetsService, private route: ActivatedRoute, private snack: MatSnackBar, private router: Router, private users: UserService, private cls: ClientsService) { }
  id: any
  data: any = []
  user_id: any = []
  employee: any = [];
  client: any = []
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.ps.getDataById(this.id).subscribe(
    res => {
        this.data = res;
        console.log(this.data);
      }
    ), this.users.getData().subscribe(data => {
      this.user_id = data;
      for (const element in this.user_id) {
        if (this.user_id[element].role == "employee") {
          this.employee.push(this.user_id[element])
        }
      }
    }, (error) => {
      console.log(error)
      // Swal.fire('Error', 'Error in loading data form server', 'error')
    }
    )
    this.cls.getData().subscribe((data: any) => {
      this.client = data
      console.log(data);
      // this.dtTrigger.next(null)
    })
  }
  updateProjet() {
    console.log(this.data)
    this.ps.updateData(this.id, this.data).subscribe(
      data => {
        console.log(data)
        Swal.fire('Succes !!', 'projet Updated', 'success').then((e) => {
          this.router.navigate(['/admin/projet'])

        })
      }, (error) => {
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        console.log('Error')
        console.log(error);
        this.snack.open(erors + '', '', {
          duration: 3000
        })
      }
    )
  }
  close() {
    this.router.navigate(['/admin/projet'])
  }
}
