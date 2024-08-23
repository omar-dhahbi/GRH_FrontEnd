import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // x = localStorage.getItem('role')

  IsLoggedIn = false
  user = new Users()
  constructor(public auths: UserService, private route: Router) { }
  ngOnInit(): void {
    this.IsLoggedIn = this.auths.IsLoggedIn()
    this.user = this.auths.getUser()
    this.auths.loginstatussubject.asObservable().subscribe((data) => {
      this.IsLoggedIn = this.auths.IsLoggedIn()
      this.user = this.auths.getUser()

    }
    )
    
  }
  logout() {
    this.auths.logout();
    this.auths.loginstatussubject.next(false)
    this.route.navigate(['login'])
  }


}

