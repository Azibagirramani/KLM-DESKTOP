import { Component, OnInit } from '@angular/core';

export interface Routesinfo {
  path: string;
  title: string;
  icons: string;

}

export const Route: Routesinfo[] = [
  { path: "home",  title: "HOME", icons: "fa fa-home"},
  { path: "usage", title: "USAGE AND STATS", icons:"fa fa-list"},
  { path: "faq", title: "FAQs", icons:"fa fa-question-circle-o"},
  { path: "go", title: "KLM GO", icons:""},
  { path: "staff", title: "GO STAFF", icons:""},

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuroutes: any[];
  public label: any[];

  constructor() { }

  ngOnInit() {
    this.menuroutes = Route.filter(menuroute => menuroute)

  }

}
