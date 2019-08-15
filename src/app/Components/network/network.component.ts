import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
})
export class NetworkComponent implements OnInit {

  netcheck;

  constructor() { }

  ngOnInit() {
      this.netcheck = navigator.onLine
      if (this.netcheck == true){
        console.log("Online")
      }
      else{
         console.log("Offline")
      }
  }

}
