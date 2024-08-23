import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private users: UserService, private router: Router, private snack: MatSnackBar) { }
  email: any
  // user=new Users
  ngOnInit(): void {
  }
  close() {
    this.router.navigate(['login'])
  }

  forgetPassword() {
    if (this.email == '' || this.email == null) {
      this.snack.open('Email is required', '', {
        duration: 3000
      })
      return;
    }
    
    this.users.forgetPassword(this.email).subscribe(
      (response) => {
        console.log(response);
        this.snack.open('Nous avons envoyé votre lien de réinitialisation de mot de passe par e-mail!', '', {
          duration: 3000
        })
        this.email = ''

      }, (error) => {
        console.log('Error')
        this.snack.open(error.error.error, '', {
          duration: 3000
        })
        console.log(error.error.error)
      }

    );
  }
}
