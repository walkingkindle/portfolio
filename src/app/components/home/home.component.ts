import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';
import { BlogComponent } from '../blog/blog.component';
import { HiringComponent } from '../hiring/hiring.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[BannerComponent,AboutComponent,ResumeComponent,BlogComponent,HiringComponent,ContactComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
