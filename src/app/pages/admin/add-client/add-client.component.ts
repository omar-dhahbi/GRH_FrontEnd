import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clients } from 'src/app/Models/clients/clients';
import { ClientsService } from 'src/app/services/clients/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  constructor(private cls: ClientsService, private route: Router, private snack: MatSnackBar) { }

  client = new Clients
  file: any;
  ngOnInit(): void {

  }

  AddClients() {
    let formData = new FormData();
    if (this.file) {
      formData.append('photo', this.file, this.file.name);
    }
    formData.append('RaisonSociale', this.client.RaisonSociale )
    formData.append('email', this.client.email )
    formData.append('Site', this.client.Site )

    // if (this.client.Telephone !== undefined && this.client.Telephone !== null) {
      formData.append('Telephone', this.client.Telephone);
    // }
    this.cls.insertData(formData).subscribe(data => {
      console.log(data);
      Swal.fire('Success !!', 'Le Client a été ajouté avec succès', 'success').then((e) => {
        this.route.navigate(['/admin/clients']);
      });
    }, (error) => {
      console.log(error);
      console.log(Object.values(error.error.error)[0]);
      const errors = Object.values(error.error.error)[0];
      this.snack.open(errors + '', '', {
        duration: 3000
      });
    });
  }
  onfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  close() {
    this.route.navigate(['/admin/clients']);
  }
}
