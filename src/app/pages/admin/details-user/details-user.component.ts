import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratsService } from 'src/app/services/Contrats/contrats.service';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  constructor(private users: UserService, private router: ActivatedRoute, private Contrats: ContratsService) { }
  id: any
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';

  Array: any = []
  detailsUser:any=[]

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.users.getUserById(this.id).subscribe(
      data => {
        this.detailsUser = data
        console.log(data)
      }
    )
    this.Contrats.getContratByUserId(this.id).subscribe(
      (res: any) => {
        this.Array = res;
      }
    )
  }
  ouvrirPdf(x: any) {
    window.open(this.imageDirectoryPath + x, '_blank');
  }

}
