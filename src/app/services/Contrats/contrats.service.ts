import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratsService {

  constructor(private http: HttpClient) { }
  insertData(data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://127.0.0.1:8000/api/contrats/add_contrat', data, { headers })
  }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/contrats/get_contrats', { headers });
  }
  deleteData(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.delete('http://localhost:8000/api/contrats/delete_contrats/' + id, { headers });
  }
  getDataById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/contrats/get_contrat/' + id, { headers })
  }
  updateData(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/contrats/update_contrtat/' + id, data, { headers })
  }
  getContratByUserId(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/employee/getContratByUserId/' + id, { headers })
  }
  search(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/contrats/searchContrat/search?search=' + query, { headers })
  }

}
