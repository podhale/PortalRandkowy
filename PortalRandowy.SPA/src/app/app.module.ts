import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotosComponent } from './users/photos/photos.component';
import { TimeAgoPipe } from './pipe/time-ago-pipe';

export function tokkenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      UsersListComponent,
      LikesComponent,
      MessagesComponent,
      UserCardComponent,
      UserDetailComponent,
      UserEditComponent,
      PhotosComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgxGalleryModule,
      FileUploadModule,
      ReactiveFormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokkenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      PaginationModule.forRoot()
   ],
   providers: [
      AuthService,
      AlertifyService,
      UserService,
      AuthGuard,
      ErrorInterceptorProvider,
      UserDetailResolver,
      UserListResolver,
      UserEditResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
