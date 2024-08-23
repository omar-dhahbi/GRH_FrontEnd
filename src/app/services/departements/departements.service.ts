import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departements } from 'src/app/Models/departements/departements';
@Injectable({
  providedIn: 'root'
})
export class DepartementsService {
  constructor(private http: HttpClient) { }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/departements/get_departements/', { headers });
  }
  insertData(data: Departements) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/departements/add_departement/', data, { headers })
  }
  deleteData(id: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.delete('http://localhost:8000/api/departements/delete_departement/' + id, { headers })

  }
  updateData(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/departements/update_departement/' + id, data, { headers })
  }
  getDataById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/departements/get_departements/' + id, { headers })
  }
  search(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/departements/searchDepartement/search?search=' + query, { headers })
  }
}
