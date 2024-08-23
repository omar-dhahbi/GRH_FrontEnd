import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StagiairesService } from 'src/app/services/stagiaires/stagiaires.service';

@Component({
  selector: 'app-details-stagiaire',
  templateUrl: './details-stagiaire.component.html',
  styleUrls: ['./details-stagiaire.component.css']
})
export class DetailsStagiaireComponent implements OnInit {
  constructor(private Sts: StagiairesService, private router: ActivatedRoute) { }
  id: any
  Array: any=[]
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.Sts.getDataById(this.id).subscribe(
      data => {
        this.Array = data
        console.log(data)
  
      }
    )
  }

}
