import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  constructor(private users: UserService, private route: Router, private snack: MatSnackBar, private router: ActivatedRoute) { }
  id: any
  currentPassword: any
  newPassword: any
  confirmPassword: any
  code: any;

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id)

  }
  updatePassword() {
    if (this.code == '' || this.code == null) {
      this.snack.open('code is required', '', {
        duration: 3000
      })
      return;
    }
    if (this.newPassword == '' || this.newPassword == null) {
      this.snack.open('new Password is required', '', {
        duration: 3000
      })
      return;
    }
    if (this.confirmPassword == '' || this.confirmPassword == null) {
      this.snack.open('confirmPassword is required', '', {
        duration: 3000
      })
      return;
    }
    if (this.newPassword.length < 6) {
      this.snack.open('Le nouveau mot de passe doit comporter au moins 6 caractères', '', {
        duration: 3000
      })
      return;
    }
    const data = { code: this.code, new_password: this.newPassword, password_confirm: this.confirmPassword }
    this.users.updatePassword(this.id, data).subscribe(
      res => {
        console.log(res)
        Swal.fire('Succes !!', 'password Updated', 'success').then((e) => {
          this.route.navigate(['login'])
        })
      }, (error) => {
        console.log('Error')
        this.snack.open(error.error.error, '', {
          duration: 3000
        })
        console.log(error.error.error)
      }


    )
  }


}
