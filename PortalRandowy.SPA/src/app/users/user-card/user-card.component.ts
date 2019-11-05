import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() getUserLikes = new EventEmitter();

  constructor(private authService: AuthService,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodeToken.nameid, id)
        .subscribe(data => {
          this.alertify.success('Polubiłeś(aś): ' + this.user.username);
        }, error => {
          this.alertify.error('Nie lubisz: ' + this.user.username);
          this.getUserLikes.emit(true);
        });
  }

}
