import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projets } from 'src/app/Models/projets/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient) { }
  addData(data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://127.0.0.1:8000/api/projets/add_projet/', data, { headers })

  }

  updateData(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    console.log(data)
    return this.http.put('http://localhost:8000/api/projets/update_projet/' + id, data, { headers })

  }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://127.0.0.1:8000/api/projets/get_projets', { headers })
  }
  search(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/projets/searchProjet/search?search=' + query, { headers })
  }
  deleteData(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.delete('http://localhost:8000/api/projets/delete_projets/' + id, { headers });

  }
  getDataById(id: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/projets/get_projet/' + id, { headers })


  }
}
