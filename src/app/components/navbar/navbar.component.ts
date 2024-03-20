import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[RouterLink],
  standalone:true,
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reloadPage(){
    window.location.reload();
  }

}
