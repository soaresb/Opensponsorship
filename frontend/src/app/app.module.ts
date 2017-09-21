import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {PopupModule} from 'ng2-opd-popup';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { AuthService} from './services/auth.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
const appRoutes: Routes = [
  {path: '', component: ProfilesComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilesComponent,
    EditComponent,

    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopupModule.forRoot(),
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
