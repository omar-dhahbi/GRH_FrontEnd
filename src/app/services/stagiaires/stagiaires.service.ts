import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stagiaires } from 'src/app/Models/stagiaires/stagiaires';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {

  constructor(private http: HttpClient) { }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/stagiaires/get_stagiaires/', { headers });
  }
  insertData(data: Stagiaires) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/stagiaires/Add_Stagiaire/', data, { headers })
  }
  deleteData(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.delete('http://localhost:8000/api/stagiaires/delete_Stagiare/' + id, { headers })

  }
  updateData(id: number, data: Stagiaires) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/stagiaires/update_Stagiaire/' + id, data, { headers })
  }
  getDataById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/stagiaires/get_Stagiaire/' + id, { headers })
  }
  search(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/stagiaires/searchStagiaire/search?search=' + query, { headers })
  }
}
