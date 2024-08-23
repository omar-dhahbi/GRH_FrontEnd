import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongéService {

  constructor(private http: HttpClient) { }
  insertData(data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://127.0.0.1:8000/api/conge/addConge', data, { headers })
  }
  getCongeById(id: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getCongéById/' + id, { headers })
  }
  AcceptCongé(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/admin/accepter/' + id, {}, { headers })
  }
  refuseCongé(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/admin/refuser/' + id, {}, { headers })
  }
  getCongéNotAccepted() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getCongeNotAccepted', { headers })
  }
  getCongéAccepted() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getCongeAccepted', { headers })
  }
  getCongéAttente() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getCongeAttente', { headers })
  }
  getResultByUserId(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/conge/getResultByUserId/' + id, { headers })
  }
  search(query: string) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/searchConge/search?search=' + query, { headers })
  }
  searchbyResult(query: string) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/employee/searchConge/search?search=' + query, { headers })
  }

}
