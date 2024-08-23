import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auths: UserService, private snack: MatSnackBar, private router: Router) { }
  user = new Users()
  x = localStorage.getItem('role');

  ngOnInit(): void {
    if ((this.x == 'admin' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['admin']);
    } else if ((this.x == 'employee' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['employee']);
    }
  
  }
  Login() {
    if (this.user.email == '' || this.user.email == null) {
      this.snack.open('Email is required', '', {
        duration: 3000
      })
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('code is required', '', {
        duration: 3000
      })
      return;
    }
    this.auths.login(this.user).subscribe(
      (data: any) => {
        this.auths.SetToken(data.token);
        this.auths.setUser(data.user);
        this.auths.setRole(data.user.role);
        console.log(data.user.role);
        if (data.role == 'admin') {
          this.router.navigate(['/admin']);
          this.auths.loginstatussubject.next(true)
        }
        else if (data.role == 'employee') {
          this.router.navigate(['/employee']);
          this.auths.loginstatussubject.next(true)
        }
        else {
          this.auths.logout()
        }
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
