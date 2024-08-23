import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user=new Users()
  constructor(private auths:UserService){

  }
  ngOnInit(): void {
    this.user=this.auths.getUser();
  }

}
