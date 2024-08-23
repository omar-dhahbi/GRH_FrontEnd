import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Reunion } from 'src/app/Models/Reunion/reunion';
import { ReunionService } from 'src/app/services/reunion/reunion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reunions',
  templateUrl: './reunions.component.html',
  styleUrls: ['./reunions.component.css']
})
export class ReunionsComponent implements OnInit {
  constructor(private snack: MatSnackBar, private rs: ReunionService, private route: Router) { }
  // dtTrigger: Subject<any> = new Subject()
  Array: any = []
  reunion = new Reunion()
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.rs.getReunionByDepartement().subscribe(
      (data: any) => {
        this.Array = data
        console.log(data);
        // this.dtTrigger.next(null)
      }, (error) => {
        console.log(error)
        Swal.fire("Error!! ", "Error in loading data", 'error');

      }
    )
  }
  deletereunion(id: number, i: number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rs.deleteData(id).subscribe(
          (data) => {
            this.Array.splice(i)

            console.log(data);
            this.snack.open('reunion deleted', '', {
              duration: 3000
            });
          }, (error) => {
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
            this.snack.open(error.error.error, '', {
              duration: 3000
            });

            console.log(error)
          }
        )

      }
    })
  }

  detail(id: number) {
    this.route.navigate(['/admin/reunion/' + id])

  }

}
