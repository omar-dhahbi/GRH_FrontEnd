import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiairesService } from 'src/app/services/stagiaires/stagiaires.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-stagiare',
  templateUrl: './update-stagiare.component.html',
  styleUrls: ['./update-stagiare.component.css']
})
export class UpdateStagiareComponent implements OnInit {
  constructor(private stag: StagiairesService, private snack: MatSnackBar, private route: ActivatedRoute, private router: Router) { }
  id: any
  data: any = []
  typeStage: any = ["Stage d'initation", "stage perfectionnement", " Stage PFE", "Autre"]
  class: any = ["1er année", "2eme année", "3eme année"]
  niveauEtude = ["Master", "License", "Doctorat", "ingenieurie"]


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.stag.getDataById(this.id).subscribe(
      (res: any) => {
        this.data = res
        console.log(this.data)
      }
    )
  }
  updateData() {
    this.stag.updateData(this.id, this.data).subscribe(
      data => {
        console.log(data)
        Swal.fire('Succes !!', 'satgiare Updated', 'success').then((e) => {
          this.router.navigate(['/admin/stagiaires'])
        })
      }, (error) => {
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        this.snack.open(erors + '', '', {
          duration: 3000
        })
        console.log(error)
      }
    )
  }
  close(){
    this.router.navigate(['/admin/Stagiaire']);
  }
}
