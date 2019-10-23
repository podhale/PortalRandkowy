
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'uzytkownicy', component: UsersListComponent },
    { path: 'polubienia', component: LikesComponent },
    { path: 'wiadomosci', component: MessagesComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
