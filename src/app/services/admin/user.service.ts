import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from 'src/app/Models/users/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  public loginstatussubject = new Subject<boolean>();
  forgetPassword(email: any) {
    return this.http.put('http://localhost:8000/api/auth/restarpasword/' + email, null);
  }
  passwordupdate(id: number, data: any) {

    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/employee/updatepassword/' + id, data, { headers });
  }


  Users(email: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/admin/UserMail/' + email, null, { headers })
  }
  ActivateCount(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http.put('http://localhost:8000/api/admin/activeAccount/' + id, null, { headers });
  }
  VerifEmail(id: number) {
    return this.http.put('http://localhost:8000/api/auth/verifMail/' + id, null);
  }
  AccounNotActive(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/admin/AccounNotActive/' + id, null, { headers });
  }
  updatePassword(id: number, data: any) {

    return this.http.put('http://localhost:8000/api/auth/updatepassword/' + id, data);
  }
  updatePassword1(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put('http://localhost:8000/api/admin/updatepassword/' + id, data, { headers });
  }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/users', { headers })
  }
  getUserById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getUserById/' + id, { headers })
  }
  getIdUser(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/getIdUser/' + id, { headers })
  }

  updateUseremployee(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/employee/updateUser/' + id, data, { headers });
  }
  updateUserAdmin(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/admin/updateUser/' + id, data, { headers });
  }
  updateUser(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/admin/updateUser/' + id, data, { headers });
  }

  login(data: any) {
    return this.http.post('http://localhost:8000/api/auth/login', data)
  }
  register(data: FormData) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post('http://localhost:8000/api/auth/register', data, { headers })
  }
  search(query: String) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/searchUsers/search?search=' + query, { headers })
  }


  getReunionByUser(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/employee/getReunionByUser/' + id, { headers })
  }


  getUserByid(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/auth/User/' + id, { headers })
  }
  SetToken(token: string) {
    localStorage.setItem('token', token);
    return true
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
    return true;
  }
  getRole() {
    return localStorage.getItem('role');

  }

  IsLoggedIn() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false
    }
    else {
      return true
    }
  }

  logout() {
    localStorage.clear()
    return true
  }
  getToken() {
    return localStorage.getItem('token')
  }
  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("id", user.id);
  }

  getUser() {
    let StrUser = localStorage.getItem('user')
    if (StrUser != null) {
      return JSON.parse(StrUser);
    }
    else {
      this.logout();
      return null
    }
  }



  getCountUser() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/countUser', { headers })

  }
  getCountDepartement() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/countDepartement', { headers })
  }
  getCountClient() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/countClient', { headers })
  }
  getCountprojet() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8000/api/admin/countProjet', { headers })
  }




}
