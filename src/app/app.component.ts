import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: Array<{name: string, status: string, url: string, id: number}> = [];

  constructor(private userService: UsersService) {}

  ngOnInit() { 
    this.userService.setGroupName(this.userService.groupName);
    this.users = this.userService.users;
  }

  @ViewChild("popUp", {read: ViewContainerRef} )
  private viewRef!: ViewContainerRef
  private ComponentRef!: ComponentRef<PopUpComponent>

  showPopUp() {
    this.ComponentRef = this.viewRef.createComponent(PopUpComponent);
    this.ComponentRef.instance.groupName = this.userService.groupName;
    this.ComponentRef.instance.memberCount = this.users.length;
  
    this.ComponentRef.instance.close.subscribe(() => {this.viewRef.clear()})
  }
} 

