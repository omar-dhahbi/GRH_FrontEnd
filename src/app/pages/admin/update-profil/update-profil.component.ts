import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {
  data: any = []
  id: any
  user = new Users
  file: any
  img: any;
  url = "http://127.0.0.1:8000/public"

  constructor( private route: ActivatedRoute, private auths: UserService, private router: Router, private snack: MatSnackBar) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.auths.getUserByid(this.id).subscribe(
      (res: any) => {
        this.data = res
        console.log(this.data)
        this.img = this.url + this.data.photo
        console.log(this.data)
      })
  }
  updateUser() {
    if (isNaN(Number(this.data.cin))) {
      this.snack.open('cin must be number', '', {
        duration: 3000
      })
      return;
    }
    if (isNaN(Number(this.data.tel))) {
      this.snack.open('tel must be number', '', {
        duration: 3000
      })
      return;
    }


    let formData = new FormData();
    if (this.file) {
      formData.append('photo', this.file, this.file.name)
    }
    console.log(this.data.cin)
    formData.append('cin', this.data.cin || '');
    console.log(formData.get('cin'))
    formData.append('nom', this.data.nom || '');
    formData.append('prenom', this.data.prenom || '');
    formData.append('tel', this.data.tel || '');
    formData.append('email', this.data.email || '');
    formData.append('_method', 'PUT')
    this.auths.updateUserAdmin(this.id, formData).subscribe(
      (data: any) => {
        console.log(data)

        this.auths.setUser(data.user);
        Swal.fire('Succes !!', 'User Updated', 'success').then((e) => {
          this.router.navigate(['/admin/profil'])
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
    this.router.navigate(['/admin/profil'])
  }
  uploadImage(event: any) {

    this.file = event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = function (this: any) {
      this.img = reader.result as string
    }.bind(this)

  }

}
