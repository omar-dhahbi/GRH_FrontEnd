import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Departements } from 'src/app/Models/departements/departements';
import { DepartementsService } from 'src/app/services/departements/departements.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departements = new Departements
  constructor(private depts: DepartementsService, private snack: MatSnackBar, private route: Router) { }

  close() {
    this.route.navigate(['/admin/departements'])
  }


  AddDeparement() {

    this.depts.insertData(this.departements).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Succes !!', 'Le département a été ajouté avec succès', 'success').then((e) => {
          this.route.navigate(['/admin/departements'])
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




  ngOnInit(): void {

  }

}
