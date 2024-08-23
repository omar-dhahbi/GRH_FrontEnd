import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private auths: UserService, private snack: MatSnackBar, private route: Router, private depats: DepartementsService) { }
  file!: File;
  user = new Users()
  departement_id: any;

  ngOnInit(): void {
    this.depats.getData().subscribe((data) => {
      this.departement_id = data
    }, (error) => {
      console.log(error)
      Swal.fire('Error', 'Error in loading data form server', 'error')
    }
    )
  }
  close() {
    this.route.navigate(['admin'])
  }
  signup() {
    if (isNaN(Number(this.user.cin))) {
      this.snack.open('cin must be number', '', {
        duration: 3000
      })
      return;
    }

    let formData = new FormData();
    formData.append('cin', this.user.cin );
    formData.append('nom', this.user.nom );
    formData.append('prenom', this.user.prenom );
    formData.append('tel', this.user.tel );
    formData.append('email', this.user.email );
    formData.append('adresse', this.user.adresse );
    formData.append('departement_id', this.user.departement_id?.toString());
    formData.append('password', this.user.password )
    formData.append('password_confirmation', this.user.password_confirmation )
    if (this.file) {
      formData.append('photo', this.user.photo, this.user.photo.name)
    }
    formData.append('role', 'employee');
    this.auths.register(formData).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('Succes !!', 'User registred', 'success').then((e) => {
          this.route.navigate(['admin'])
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
  uploadImage(event: any) {
    this.file = event.target.files[0];
    this.user.photo = this.file
    console.log(this.file);
  }


}
