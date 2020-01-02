import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LoginServiceService } from '../services/login-service.service';
// import store from 'store';


@Injectable()
    
export class AuthInterceptor implements HttpInterceptor {
        constructor(public authService: LoginServiceService){}
    
        intercept(req: HttpRequest<any>, next: HttpHandler){
            if(!this.authService.apiToken){
                return next.handle(req);
            }
            let headers = req.headers.set('Authorization', 'Bearer ${this.authService.apiToken}');
            const authReq = req.clone({
                headers: headers
            });
            return next.handle(authReq);
        }
        
}


