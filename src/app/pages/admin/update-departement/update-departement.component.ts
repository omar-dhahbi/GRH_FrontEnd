import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departements } from 'src/app/Models/departements/departements';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  constructor(private depts: DepartementsService, private route: ActivatedRoute, private router: Router) { }
  id: any
  data: any=[]

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.depts.getDataById(this.id).subscribe(
      (res: any) => {
        this.data = res
        console.log(this.data)
      }
    )
  }

  updateData() {
    this.depts.updateData(this.id, this.data).subscribe(
      data => {
        console.log(data)
        Swal.fire('Succes !!', 'departement Updated', 'success').then((e) => {
          this.router.navigate(['/admin/departements'])
        })

      }, (error) => {
        console.log(error)
        Swal.fire('Error', 'Error in Updating departement', 'error')
      }
    )
  }
  close() {
    this.router.navigate(['/admin/departements'])
  }

}
