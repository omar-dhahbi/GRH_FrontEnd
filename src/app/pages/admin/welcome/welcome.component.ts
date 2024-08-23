import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Users } from 'src/app/Models/users/users';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // dtTrigger: Subject<any> = new Subject()
  count!: number;
  dept_id!: number
  projet_id!: number
  client_id!: number
  Array: any = []
  employee: any = [];
  userStatus = true;
  statutString: any;
  user = new Users()

  constructor(private users: UserService, private route: Router) { }
  ngOnInit(): void {
    this.users.getData().subscribe(
      (data: any) => {
        this.Array = data
        console.log(data);
        // this.dtTrigger.next(null)
        for (const element in this.Array) {
          if (this.Array[element].role == "employee") {
            this.employee.push(this.Array[element])
          }
        }
        console.log(this.employee)
      }
    )
    this.users.getCountUser().subscribe(
      (response: any) => {
        this.count = response.count;
        console.log(response)
      }
    ), (error: any) => {
      console.error(error);
    }
    this.users.getCountDepartement().subscribe(
      (response: any) => {
        this.dept_id = response.count;
        console.log(response)
      }
    ), (error: any) => {
      console.error(error);
    }
    this.users.getCountprojet().subscribe(
      (response: any) => {
        this.projet_id = response.count;
        console.log(response)
      }
    ), (error: any) => {
      console.error(error);
    }
    this.users.getCountClient().subscribe(
      (response: any) => {
        this.client_id = response.count;
        console.log(response)
      }
    ), (error: any) => {
      console.error(error);
    }
  }
  searchUsers = ''

  search() {
    this.users.search(this.searchUsers).subscribe(
      data => {
        this.Array = data
      }
    )
  }


  valueButton(statut: number) {
    if (statut == 1) {
      return "Désactiver";
    }
    else {
      return "Activer"
    }
  }
  activerDesactiver(statut: number, id: number) {
    if (statut == 0) {
      this.users.ActivateCount(id).subscribe(
        res => {
          console.log(res)
          this.user.status = true
          window.location.reload();
        },
        (err) => {
          console.log(err)
        }
      )
    }
    if (statut == 1) {
      this.users.AccounNotActive(id).subscribe(
        res => {
          console.log(res);
          this.user.status = false
          window.location.reload();

        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  detail(id: number) {
    this.route.navigate(['/admin/Users/' + id])
  }
}
