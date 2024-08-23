import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
@Injectable({
  providedIn: 'root'
}
)
export class AuthInterceptor implements HttpInterceptor {
  constructor(private users: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req
    const token = this.users.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {
          Authorization: 'Bearer ${token}', 'Content-Type': 'application/json'


        }
      })
    }
    return next.handle(req);
  }



}
export const AuthInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

  }
]


