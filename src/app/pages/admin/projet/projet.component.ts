import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Projets } from 'src/app/Models/projets/projets';
import { ProjetsService } from 'src/app/services/projets/projets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  // dtTrigger: Subject<any> = new Subject()
  constructor(private ps: ProjetsService, private snack: MatSnackBar) { }
  Array: any = []
  projet = new Projets
  ngOnInit(): void {
    this.getData()
  }
  searchProjet = ""
  search() {
    this.ps.search(this.searchProjet).subscribe(data => {
      this.Array = data
    })
  }
   deleteProjet(id: any,i:number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'

    }).then(async (result) => {
      if (result.isConfirmed) {
         this.ps.deleteData(id).subscribe(
          (data) => {
            // this.Array = this.Array.filter((Projets: Projets) => Projets.id != id);
            this.Array.splice(i)

            this.snack.open('Projet deleted', '', {
              duration: 3000
            });
          }, (error) => {
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
            console.log(error)
          }
        )

      }
    })
  }
  getData() {
    this.ps.getData().subscribe((data: any) => {
      this.Array = data
      console.log(data);
      // this.dtTrigger.next(null)
    }, (error) => {
      console.log(error)
      Swal.fire("Error!! ", "Error in loading data", 'error');

    }
    )
  }

}
