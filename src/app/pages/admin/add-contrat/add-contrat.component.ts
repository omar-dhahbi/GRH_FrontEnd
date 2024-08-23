import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/Models/contrats/contrat';
import { Users } from 'src/app/Models/users/users';
import { ContratsService } from 'src/app/services/Contrats/contrats.service';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  constructor(private route: Router, private snack: MatSnackBar, private contras: ContratsService, private users: UserService) { }
  conrats = new Contrat()
  NomContrat: any = ["SIVP", "CDD", "CDI"]
  user_id: any = []
  employee: any = [];
  file: any;
  user = new Users()

  ngOnInit(): void {
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
  AddContrat() {
    let formData = new FormData();
    formData.append("user_id", this.conrats.user_id?.toString() || "");
    formData.append("DateDebut", this.conrats.DateDebut?.toString() || "");
    formData.append("DateFin", this.conrats.DateFin?.toString() || "");
    formData.append("NomContrat", this.conrats.NomContrat || "");
    if(this.file){
      formData.append('url', this.file, this.file.name);
    }

    this.contras.insertData(formData).subscribe(
      data => {
        console.log(data)
        Swal.fire('Success !!', 'Le Contrat a été ajouté avec succès', 'success').then((e) => {
          this.route.navigate(['/admin/Contrats']);
        });
      }, (error) => {
        console.log(error);
        console.log(Object.values(error.error.error)[0]);
        const errors = Object.values(error.error.error)[0];
        this.snack.open(errors + '', '', {
          duration: 3000
        });
      });
  }
  onfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  close() {
    this.route.navigate(['/admin/Contrats']);
  }
}


