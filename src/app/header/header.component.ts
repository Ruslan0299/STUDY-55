
import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) 
export class HeaderComponent implements OnInit {
  newGroupName: string = "";
  groupName: string = "";

  constructor(private userService: UsersService ) {}

  ngOnInit(): void {
    this.groupName = this.userService.groupName;
    if (!this.userService.groupName) {
      this.userService.setGroupName("Healthy lifestyle");
      this.groupName = "Healthy lifestyle";
    }
  }
  onEditGroup() {
    if (this.newGroupName) {
      this.userService.setGroupName(this.newGroupName);
      this.groupName = this.newGroupName;
      this.newGroupName = "";
    }
  }
  
}

