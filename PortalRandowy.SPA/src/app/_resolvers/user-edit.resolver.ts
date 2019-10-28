import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class UserEditResolver implements Resolve<User> {

    constructor(private userService: UserService,
                private router: Router,
                private alertfiy: AlertifyService,
                private authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): User | Observable<User> {
        return this.userService.getUser(this.authService.decodeToken.nameid).pipe(
            catchError(error => {
                this.alertfiy.error('Problem z pobieraniem danych');
                this.router.navigate(['/uzytkownicy']);
                return of(null);
            })
        );
    }
}
