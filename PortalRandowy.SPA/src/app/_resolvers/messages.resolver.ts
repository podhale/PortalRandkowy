import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MessagesResolver implements Resolve<User[]> {

    pageNumber = 1;
    pageSize = 18;
    messageContainer = 'Nieprzeczytane';

    constructor(private userService: UserService,
                private router: Router,
                private alertfiy: AlertifyService,
                private authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {

        return this.userService.getMessages(this.authService.decodeToken.nameid,
                                            this.pageNumber, this.pageSize, this.messageContainer).pipe(
            catchError(error => {
                this.alertfiy.error('Problem z wyszukiwaniem wiadomości');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
