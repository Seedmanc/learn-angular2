import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {Injectable} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authS:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    // black magic goes here
    return this.authS.getToken().flatMap(token => next.handle(req.clone({params: req.params.set('auth',token)})));
  }
}
