import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserListResolver implements Resolve<User[]> {

    constructor(private userService: UserService,
                private router: Router,
                private alertfiy: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertfiy.error('Problem z pobieraniem danych');
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}
