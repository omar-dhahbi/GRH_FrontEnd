import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Stagiaires } from 'src/app/Models/stagiaires/stagiaires';
import { StagiairesService } from 'src/app/services/stagiaires/stagiaires.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  constructor(private stags: StagiairesService, private snack: MatSnackBar, private route: Router) { }
  // dtTrigger: Subject<any> = new Subject()
  Array: any = []
  Stagiaire = new Stagiaires
  searchStagiaire = ''
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.stags.getData().subscribe(
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
  deleteStag(id: number, i: number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'

    }).then(async (result) => {
      if (result.isConfirmed) {
        this.stags.deleteData(id).subscribe(
          (data) => {
            // this.Array = this.Array.filter((Projets: Projets) => Projets.id != id);
            this.Array.splice(i)

            this.snack.open('stagiaire deleted', '', {
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
  search() {
    this.stags.search(this.searchStagiaire).subscribe(data => {
      this.Array = data
    })
  }
  detail(id: number) {
    this.route.navigate(['/admin/Stagiaire/' + id])

  }

}
