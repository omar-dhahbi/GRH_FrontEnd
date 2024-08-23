import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Departements } from 'src/app/Models/departements/departements';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  constructor(private depts: DepartementsService, private snack: MatSnackBar) { }
  // dtTrigger: Subject<any> = new Subject()

  Array: any=[]
  ngOnInit(): void {
    this.getData()
  }
  deleteDept(id: number,i:number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'
    }).then((result) => {
      if (result.isConfirmed) {
        this.depts.deleteData(id).subscribe(
          (data) => {
            // this.Array = this.Array.filter((departement: Departements) => departement.id != id);
            this.Array.splice(i)

            console.log(data);
            this.snack.open('departement deleted', '', {
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
  getData() {
    this.depts.getData().subscribe(
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
  searchDepartement = ""
  search() {
    this.depts.search(this.searchDepartement).subscribe(data => {
      this.Array = data
    })

  }
}
