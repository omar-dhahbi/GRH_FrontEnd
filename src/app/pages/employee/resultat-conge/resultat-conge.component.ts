import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';
import { CongéService } from 'src/app/services/congé/congé.service';

@Component({
  selector: 'app-resultat-conge',
  templateUrl: './resultat-conge.component.html',
  styleUrls: ['./resultat-conge.component.css']
})
export class ResultatCongeComponent implements OnInit {
  constructor(private conge: CongéService, private route: ActivatedRoute, private router: Router, private users: UserService) { }
  id: any
  Array: any = []
  user = new Users()
  ngOnInit(): void {
    this.user.nom = this.users.getUser().nom;
    this.user.prenom = this.users.getUser().prenom;

    this.id = localStorage.getItem('id');
    this.conge.getResultByUserId(this.id).subscribe(
      (res: any) => {
        this.Array = res.conges;
        console.log(res)
      }
    )
  }
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';

  resultConge = ''
  search() {
    this.conge.searchbyResult(this.resultConge).subscribe(
      (res: any) => {
        this.Array = res;
      }
    )
  }

  ouvrirphoto(x: any) {
    window.open(this.imageDirectoryPath + x, '_blank');
  }

}
