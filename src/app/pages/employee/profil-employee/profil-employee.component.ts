import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users/users';
import { ContratsService } from 'src/app/services/Contrats/contrats.service';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrls: ['./profil-employee.component.css']
})
export class ProfilEmployeeComponent implements OnInit {
  user = new Users()
  id: any
  Array: any = []
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';
  userDetails: any=[];


  constructor(private auths: UserService, private contrats: ContratsService) { }
  ngOnInit(): void {
    this.user = this.auths.getUser();
    this.id = localStorage.getItem('id');
    this.contrats.getContratByUserId(this.id).subscribe(
      (res: any) => {
        this.Array = res;
        console.log(res)
      }
    )
    this.auths.getUserById(this.id).subscribe((res: any) => {
      this.userDetails = res;
      console.log(res);
    });
  }


  ouvrirPdf(x: any) {
    window.open(this.imageDirectoryPath + x, '_blank');
  }



}
