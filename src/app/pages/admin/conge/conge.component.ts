import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/admin/user.service';
import { CongéService } from 'src/app/services/congé/congé.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  tabConge: any = [];
  constructor(private conge: CongéService, private snack: MatSnackBar) { }
  imageDirectoryPath: any = 'http://127.0.0.1:8000/public';

  ngOnInit(): void {
  }

  ouvrirphoto(x: any) {
    window.open(this.imageDirectoryPath + x, '_blank');
  }
  button1 = "nav-link active";
  button2 = "nav-link";
  button3 = "nav-link";


  getCongeAccepter() {
    this.conge.getCongéAccepted().subscribe(
      (data: any) => {
        this.tabConge = data
        console.log(data)
      },
      (error) => {
        console.log(error)
      }

    )
  }
  getCongeRefuser() {
    this.conge.getCongéNotAccepted().subscribe(
      (data: any) => {
        this.tabConge = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }
  getCongeAttente() {
    console.log(this.conge)
    this.conge.getCongéAttente().subscribe(
      (data: any) => {
        this.tabConge = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  buttonTab(statut: string) {
    if (statut == 'attente') {
      this.getCongeAttente();
      this.button1 = "nav-link active";
      this.button2 = "nav-link";
      this.button3 = "nav-link";

    }
    if (statut == 'accepter') {
      this.getCongeAccepter();
      this.button1 = "nav-link ";
      this.button2 = "nav-link active";
      this.button3 = "nav-link";

    }

    if (statut == 'refuser') {
      this.getCongeRefuser();
      this.button1 = "nav-link ";
      this.button2 = "nav-link ";
      this.button3 = "nav-link active";

    }
  }
  accepter(id: number) {
    this.conge.AcceptCongé(id).subscribe(
      (data: any) => {
        console.log(data)
        window.location.reload();
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
  refuser(id: number) {
    this.conge.refuseCongé(id).subscribe(
      (data: any) => {
        console.log(data)
        window.location.reload();
      }, (error) => {
        console.log(error)
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
  searchConge = ''
  search() {
    this.conge.search(this.searchConge).subscribe(
      (data: any) => {
        this.tabConge = data
      }

    )
  }
}
