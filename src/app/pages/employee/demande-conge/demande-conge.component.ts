import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Congés } from 'src/app/Models/Congé/congés';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';
import { CongéService } from 'src/app/services/congé/congé.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
  tomorrow: Date;
  file: any;
  constructor(private conges: CongéService, private snack: MatSnackBar, private route: Router, private users: UserService) {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }
  user_id: any;
  ngOnInit(): void {
    this.user_id = this.users.getUser().id;
    this.user.cin = this.users.getUser().cin;
    this.user.nom = this.users.getUser().nom;
    this.user.prenom = this.users.getUser().prenom;
  }


  user = new Users()
  conge = new Congés()
  insertData() {

    if (this.conge.type == '' || this.conge.type == null) {
      this.snack.open('Type is required', '', {
        duration: 3000
      })
      return;
    }
    if (this.conge.DateDebut === null || this.conge.DateDebut.toString() === '') {
      this.snack.open('Date Debut is required', '', {
        duration: 3000
      });
      return;
    }
    if (this.conge.DateFin === null || this.conge.DateFin.toString() === '') {
      this.snack.open('Date Fin is required', '', {
        duration: 3000
      });
      return;
    }
    this.conge.user_id = this.user;
    // console.log(this.conge)
    let formData = new FormData();
    formData.append("user_id", this.user_id)
    formData.append('type', this.conge.type || "")
    // if (this.conge.DateDebut) {
    formData.append('DateDebut', this.conge.DateDebut.toString() || "");
    // // }
    // // if (this.conge.DateFin) {
    formData.append('DateFin', this.conge.DateFin.toString() || "");
    // // }
    // // if (this.conge.NbrJour) {
    formData.append('NbrJour', this.conge.NbrJour.toString() || "");
    // // }

    formData.append('CauseConge', this.conge.CauseConge || "");
    if (this.file) {
      formData.append('photo', this.file, this.file.name);
    }
    // if (this.conge.CauseConge) {
    formData.append('CauseConge', this.conge.CauseConge || '');
    // }
    this.conges.insertData(formData).subscribe(
      (data: any) => {
        Swal.fire('Succes !!', ' leave request  successfuly', 'success').then((e) => {
          this.route.navigate(['/employee'])
        })
      }, (error) => {
        console.log(error.error.error)
        const erors = error.error.error
        this.snack.open(erors + '', '', {
          duration: 3000
        })
        console.log(error)
      }
    )
  }
  close() {
    this.route.navigate(['/employee'])
  }

  calculateNbrJour(): void {
    const startDate = new Date(this.conge.DateDebut);
    const endDate = new Date(this.conge.DateFin);
    const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    this.conge.NbrJour = numberOfDays;
  }

  onfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}
