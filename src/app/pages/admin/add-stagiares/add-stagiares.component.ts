import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Stagiaires } from 'src/app/Models/stagiaires/stagiaires';
import { StagiairesService } from 'src/app/services/stagiaires/stagiaires.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-stagiares',
  templateUrl: './add-stagiares.component.html',
  styleUrls: ['./add-stagiares.component.css']
})
export class AddStagiaresComponent implements OnInit {
  constructor(private stags: StagiairesService, private route: Router, private snack: MatSnackBar) { }
  niveauEtude: any = ["Master", "License", "Doctorat", "ingenieurie"]
  stagiaire = new Stagiaires
  typeStage: any = ["Stage d'initation", "stage perfectionnement", "Stage PFE", "Autre"]
  class: any = ["1er année", "2eme année", "3eme année"]
  ngOnInit(): void { }
  AddStagiaire() {
    console.log(this.stagiaire)
    if (isNaN(Number(this.stagiaire.Cin))) {
      this.snack.open('cin must be number', '', {
        duration: 3000
      })
      return;
    }
    this.stags.insertData(this.stagiaire).subscribe(
      data => {
        console.log(data)
        Swal.fire('Succes !!', 'Le Stagiaire a été ajouté avec succès', 'success').then((e) => {
          this.route.navigate(['/admin/stagiaires'])
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
  // getTodayDate(): string {

  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = today.getMonth() + 1;
  //   const day = today.getDate();
  //   return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  // }
  close() {
    this.route.navigate(['/admin/stagiaires'])
  }
  onTypeStageChange(event: any) {
    if (event.value ===  "Stage PFE") {
      this.stagiaire.class = "3eme année"
    }
    else if (event.value === "stage perfectionnement") {
      this.stagiaire.class = "2eme année";
    }
    else if (event.value === "Stage d'initation") {
      this.stagiaire.class = "1er année";
    }

    else if (event.value === "Autre") {
      this.stagiaire.class = "";
    }
  }
}
