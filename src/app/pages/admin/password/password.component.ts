import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  constructor(private Users: UserService, private route: Router, private snack: MatSnackBar, private router: ActivatedRoute) { }
  id: any
  currentPassword: any
  newPassword: any
  confirmPassword: any
  ngOnInit(): void {
    // this.router.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
    this.id = localStorage.getItem('id');

    console.log(this.id);
  }
  updatePassword() {
    if (this.currentPassword == '' || this.currentPassword == null) {
      this.snack.open('currentPassword is required', '', {
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
    if (this.newPassword.length < 6) {
      this.snack.open('Le nouveau mot de passe doit comporter au moins 6 caractères', '', {
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
    const data = { current_password: this.currentPassword, new_password: this.newPassword, password_confirm: this.confirmPassword }
    this.Users.updatePassword1(this.id, data).subscribe(
      res => {
        console.log(res)
        Swal.fire('Succes !!', 'password Updated', 'success').then((e) => {
          this.route.navigate(['/admin/'])
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
