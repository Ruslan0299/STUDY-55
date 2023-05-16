import { UsersService } from './../service/users.service';
import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = '' 
  newGroupName: string = "";
  groupName: string = "";
  newName: string = "";
  newStatus: string = "";

  constructor(private userService: UsersService) {
    this.groupName = "Healthy lifestyle"
  }

  ngOnInit(): void {
    this.userService.getGroupNameObservable().subscribe(groupName => {
      this.groupName = groupName;
    });
  }
  onEditGroup() {
    this.userService.setGroupName(this.newGroupName);
    this.newGroupName = "";
    }
  
  onEditName() {
    this.name = this.newName;
    this.newName = "";
  }
  
  onEditStatus() {
    this.status = this.newStatus;
    this.newStatus = "";
  }
  
}
