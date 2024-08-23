import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Congés } from 'src/app/Models/Congé/congés';
import { Contrat } from 'src/app/Models/contrats/contrat';
import { ContratsService } from 'src/app/services/Contrats/contrats.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  constructor(private contrat: ContratsService, private snack: MatSnackBar) { }
  Array: any = []
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';
  ngOnInit(): void {
    this.getData()
  }
  getData() {

    this.contrat.getData().subscribe(
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
  deleteContrat(id: number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contrat.deleteData(id).subscribe(
          (data) => {

            this.Array = this.Array.filter((contrat: Contrat) => contrat.id != id);
            this.snack.open('contrat deleted', '', {
              duration: 3000
            });
            console.log(data)

          }, (error) => {
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
            console.log(error)
          }
        )

      }

    })
  }
  ouvrirPdf(x: any) {
    window.open(this.imageDirectoryPath + x, '_blank');
  }
  contrat_id = ""
  search() {
    this.contrat.search(this.contrat_id).subscribe(data => {
      this.Array = data
    })
  }


}
