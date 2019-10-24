import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailResolver implements Resolve<User> {

    constructor(private userService: UserService,
                private router: Router,
                private alertfiy: AlertifyService) {}

                resolve(route: ActivatedRouteSnapshot): User | Observable<User> {
                    return this.userService.getUser(route.params.id).pipe(
                        catchError(error => {
                            this.alertfiy.error('Problem z pobieraniem danych');
                            this.router.navigate(['/uzytkownicy']);
                            return of(null);
                        })
                    );
                }
}
