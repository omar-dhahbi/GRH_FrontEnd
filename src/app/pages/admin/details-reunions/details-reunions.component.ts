import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion/reunion.service';

@Component({
  selector: 'app-details-reunions',
  templateUrl: './details-reunions.component.html',
  styleUrls: ['./details-reunions.component.css']
})
export class DetailsReunionsComponent implements OnInit {
  constructor(private reunion: ReunionService, private router: ActivatedRoute) { }
id:any
Array:any=[]
  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.reunion.getDataByid(this.id).subscribe(
      data => {
        this.Array = data
        console.log(data)

      }
    )
  }

}
