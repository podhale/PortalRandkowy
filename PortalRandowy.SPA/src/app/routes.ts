
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children:
      [
        { path: 'uzytkownicy', component: UsersListComponent, resolve: {users: UserListResolver} },
        { path: 'uzytkownicy/edycja', component: UserEditComponent, resolve: {user: UserEditResolver} },
        { path: 'uzytkownicy/:id', component: UserDetailComponent, resolve: {user: UserDetailResolver} },
        { path: 'polubienia', component: LikesComponent },
        { path: 'wiadomosci', component: MessagesComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
