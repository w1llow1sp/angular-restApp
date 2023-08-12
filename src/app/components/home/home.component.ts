import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: User[] = [];
  constructor(private reqresService: ReqresService) {
    this.getUsers();
  }

  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  userDetails(id: number) {
    console.log('User id: ', id);
  }
}
