import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrls: ['./verif-email.component.css']
})
export class VerifEmailComponent implements OnInit {
  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) { }
  id: any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
  VerifEmail() {
    this.user.VerifEmail(this.id).subscribe((response) => {
      console.log(response);
      Swal.fire('Succes done !!', 'Maintenant, vous avez accès Pour Connecter !!!', 'success').then((e) => {
        this.router.navigate(['login'])
      })
    });
  }


}
