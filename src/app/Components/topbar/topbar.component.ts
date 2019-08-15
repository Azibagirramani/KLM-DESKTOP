import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../Services/Users/users.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private usersservice: UsersService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.usersservice.logout()
    this.router.navigate(['login'])
    console.log("clicked")
  }

}
