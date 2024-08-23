import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reunion } from 'src/app/Models/Reunion/reunion';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import { ReunionService } from 'src/app/services/reunion/reunion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css']
})
export class AddReunionComponent implements OnInit {
  reunions = new Reunion()
  deptarement_id:any
  constructor(private snack: MatSnackBar, private route: Router, private rs: ReunionService, private depts: DepartementsService) { }
  ngOnInit(): void {
    this.depts.getData().subscribe(
      (data:any)=>{
        this.deptarement_id=data
        console.log(this.deptarement_id)
      } ,(error) => {
        console.log(error)
        Swal.fire('Error', 'Error in loading data form server', 'error')
      }
    )
   }
   close() {
    this.route.navigate(['/admin/reunions'])
  }
  AddData() {
    console.log(this.reunions)
    this.rs.AddData(this.reunions).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Succes !!', 'Le reunion a été ajouté avec succès', 'success').then((e) => {
          this.route.navigate(['/admin/reunions'])
        })
      }, (error) => {
        console.log(error);
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        this.snack.open(erors + '', '', {
          duration: 3000
        })
      }
    )
  }

}
