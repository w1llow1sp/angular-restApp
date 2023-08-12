import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 11,
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'assets/img/user.png',
      },
      {
        id: 12,
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'assets/img/user1.png',
      },
      {
        id: 13,
        first_name: 'Tracy',
        last_name: 'Ramos',
        avatar: 'assets/img/user2.png',
      },
      {
        id: 14,
        first_name: 'Maria',
        last_name: 'Joyce',
        avatar: 'assets/img/user3.png',
      },
      {
        id: 15,
        first_name: 'Jackson',
        last_name: 'Lara',
        avatar: 'assets/img/user4.png',
      },
      {
        id: 16,
        first_name: 'Tisha',
        last_name: 'Norton',
        avatar: 'assets/img/user5.png',
      },
      {
        id: 17,
        first_name: 'Adam',
        last_name: 'Mccall',
        avatar: 'assets/img/user6.png',
      },
      {
        id: 18,
        first_name: 'Albert',
        last_name: 'Juan',
        avatar: 'assets/img/user7.png',
      },
      {
        id: 19,
        first_name: 'Emma',
        last_name: 'Berger',
        avatar: 'assets/img/user8.png',
      },
      {
        id: 20,
        first_name: 'Mary',
        last_name: 'Cruz',
        avatar: 'assets/img/user9.png',
      },
    ];
    return { users };
  }
  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map((user) => user.id)) + 1
      : 11;
  }
}
