import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatMenuModule} from "@angular/material";
import { SidebarComponent } from './Sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './Login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TopbarComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatFormFieldModule, MatButtonModule,MatInputModule, MatIconModule,
    AppRoutingModule, 
    ChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
  
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
