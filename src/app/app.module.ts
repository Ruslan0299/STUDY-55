import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    PopUpComponent  
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
