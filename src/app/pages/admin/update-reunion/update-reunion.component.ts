import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import { ReunionService } from 'src/app/services/reunion/reunion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reunion',
  templateUrl: './update-reunion.component.html',
  styleUrls: ['./update-reunion.component.css']
})
export class UpdateReunionComponent implements OnInit {
  constructor(private reunions: ReunionService, private route: ActivatedRoute,private depts:DepartementsService, private snack: MatSnackBar, private router: Router) { }
  id: any
  Array: any = []
  deptarement_id: any = []
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.reunions.getDataById(this.id).subscribe(
      (res:any) => {
        this.Array = res
        console.log(this.Array)
      }
    )
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
  close(){
    this.router.navigate(['/admin/reunions'])

  }
  updateData() {
    this.reunions.updateData(this.id, this.Array).subscribe(
      res => {
        console.log(res)
        Swal.fire('Succes !!', 'reunion Updated', 'success').then((e) => {
          this.router.navigate(['/admin/reunions'])

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



}
