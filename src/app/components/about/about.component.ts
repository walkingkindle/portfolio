import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone:true
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadCV(){
    const cvPath = "/assets/cv/aleksa-hadzic-cv.pdf"

    const link = document.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href',cvPath);
    link.click();
  }

}
