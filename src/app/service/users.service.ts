import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      name: 'Mike',
      status: "I'm learning angular",
      url: 'https://i.pravatar.cc/150?img=12',
      id: 1,
    },
    {
      name: 'Nikola',
      status: 'Playing piano',
      url: 'https://i.pravatar.cc/150?img=7',
      id: 2,
    },
    {
      name: 'Bob',
      status: 'Translations from Chinese',
      url: 'https://i.pravatar.cc/150?img=11',
      id: 3,
    },
    {
      name: 'Anna ',
      status: 'Pretty girl',
      url: 'https://i.pravatar.cc/150?img=1',
      id: 4,
    },
  ];
  private groupNameSubject: Subject<string> = new Subject<string>();
  groupName: string = 'Healthy lifestyle';

  setGroupName(newGroupName: string) {
    this.groupName = newGroupName;
    this.groupNameSubject.next(newGroupName);
  }
  getGroupNameObservable() {
    return this.groupNameSubject.asObservable();
  }
  setName(name: string, newName: string) {
    const user = this.users.find((user) => user.name === name);
    if (user) {
      user.name = newName;
    }
  }
  setStatus(name: string, newStatus: string) {
    const user = this.users.find((user) => user.name === name);
    if (user) {
      user.status = newStatus;
    }
  }

  constructor() {}
}
 