import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  constructor(private http: HttpClient) { }
  AddData(data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://127.0.0.1:8000/api/reunions/add_reunion', data, { headers })

  }

  getReunionByDepartement() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getReunionByDepartement', { headers });

  }
  getDataById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/reunions/get_reunion/' + id, { headers })
  }
  getDataByid(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/reunions/reunion/' + id, { headers })
  }
  searchData(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/departements/searchReunion/search?search=' + query, { headers })

  }
  updateData(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    console.log(data)
    return this.http.put('http://localhost:8000/api/reunions/update_reunion/' + id, data, { headers })

  }
  deleteData(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.delete('http://localhost:8000/api/reunions/delete_reunions/' + id, { headers });

  }

}
