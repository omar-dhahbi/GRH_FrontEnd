import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from 'src/app/Models/clients/clients';
import { ClientsService } from 'src/app/services/clients/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  constructor(private cls: ClientsService, private router: ActivatedRoute, private route: Router,private snack:MatSnackBar) { }
  id: any
  data: any = []
  file: any
  img: any;
  url = "http://127.0.0.1:8000/public"
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.cls.getDataById(this.id).subscribe(
      (res: any) => {
        this.data = res
        this.img = this.url + this.data.photo
        console.log(this.data)
      }
    )

  }
  updateData() {

    let formData = new FormData();
    if (this.file) {
      formData.append('photo', this.file, this.file.name)
     }
    formData.append('RaisonSociale', this.data.RaisonSociale || '')
    formData.append('email', this.data.email || '')
    formData.append('Site', this.data.Site || '')
    formData.append('Telephone', (this.data.Telephone || '').toString());
    formData.append('_method', 'PUT')
    console.log(this.data)
    this.cls.updateData(this.id, formData).subscribe(
      data => {
        console.log(data)

        Swal.fire('Succes !!', 'Client Updated', 'success').then((e) => {
          this.route.navigate(['/admin/Clients'])
        })
      }, (error) => {

        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        console.log('Error')
        console.log(error);
        this.snack.open(erors + '', '', {
          duration: 3000
        })
      }
    )
  }
  close() {
    this.route.navigate(['/admin/Clients'])
  }
  onfile(event: any) {

    this.file = event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = function (this: any) {
      this.img = reader.result as string
    }.bind(this)
  }

}



