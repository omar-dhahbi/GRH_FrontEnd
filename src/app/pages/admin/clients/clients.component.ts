import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients/clients.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { Clients } from 'src/app/Models/clients/clients';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(private cls: ClientsService, private snack: MatSnackBar) { }
  // dtTrigger: Subject<any> = new Subject()
  Array: any = []
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.cls.getData().subscribe((data: any) => {
      this.Array = data
      console.log(data);
      // this.dtTrigger.next(null)
    }, (error) => {
      console.log(error)
      Swal.fire("Error!! ", "Error in loading data", 'error');
    }
    )
  }
  deleteClient(id: number, i: number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure,want to delete this departement'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cls.deleteData(id).subscribe(
          (data) => {
            // this.Array = this.Array.filter((client: Clients) => client.id == id);
            this.Array.splice(i)
            this.snack.open('Client deleted', '', {
              duration: 3000
            });
            console.log(data)
          },
          (error) => {
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
            console.log(error)
          }
        )
      }
    })
  }
  searchClient = ""
  search() {
    this.cls.search(this.searchClient).subscribe(data => {
      this.Array = data

    })

  }

}
