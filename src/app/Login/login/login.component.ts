import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private router: Router,) { }

  ngOnInit() {

  }

submit(){
  this.router.navigate(['dashboard'])
  console.log("Login")
}

}
