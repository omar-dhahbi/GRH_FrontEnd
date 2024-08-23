import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratsService } from 'src/app/services/Contrats/contrats.service';
import { UserService } from 'src/app/services/admin/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  constructor(private contrats: ContratsService, private route: ActivatedRoute, private auths: UserService, private router: Router, private snack: MatSnackBar) { }
  id: any
  data: any = []
  file: any
  NomContrat: any = ["SIVP", "CDD", "CDI"]
  user_id: any=[]
  employee: any = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.contrats.getDataById(this.id).subscribe(
      (res: any) => {
        this.data = res
        console.log(this.data)
      }
    )
    this.auths.getData().subscribe(res => {
      this.user_id = res;
      for (const element in this.user_id) {
        if (this.user_id[element].role == "employee") {
          this.employee.push(this.user_id[element])
        }
      }
    }, (error) => {
      console.log(error)
    }
    )
  }
  updateData() {
    let formData = new FormData();
    console.log(
      this.data
    )
    formData.append("user_id", this.data.user_id.toString() );
    formData.append("DateDebut", this.data.DateDebut.toString() );
    formData.append("DateFin", this.data.DateFin.toString() );
    formData.append("NomContrat", this.data.NomContrat );
    formData.append('_method', 'PUT')

    if (this.file) {
      formData.append('url', this.file, this.file.name);
    }
    this.contrats.updateData(this.id, formData).subscribe(
      data => {
        console.log(data)
        Swal.fire('Succes !!', 'Contrat Updated', 'success').then((e) => {
          this.router.navigate(['/admin/Contrats'])
        })
      }, (error) => {
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        console.log('Error')
        console.log(error);
        this.snack.open(erors + '', '', {
          duration: 3000
        })
      }
    )
  }
  onfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  close() {
    this.router.navigate(['/admin/Contrats'])
  }
}
