import { Component, OnInit } from '@angular/core';
import emailjs,{type EmailJSResponseStatus} from '@emailjs/browser'
import { environment } from '../../../environments/environment.local';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterConfigOptions } from '@angular/router';
import { MailService } from '../../services/mail.service';
import { response } from 'express';
import { EmailData } from '../../EmailData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[FormsModule,CommonModule,ReactiveFormsModule],
  providers:[MailService],
  standalone:true
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router:Router,private mailService:MailService) { }

 contactForm!: FormGroup; 

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required]
    })
  }

  async ngOnSubmit(){
    console.log('submitted!')
    if(this.contactForm.valid){
      const formData = this.contactForm.value;
      const emailData:EmailData = {
        name: this.contactForm.get('name')?.value,
        email:this.contactForm.get('email')?.value,
        message : this.contactForm.get('message')?.value
      }

      console.log(emailData)
      this.mailService.sendmail(emailData).subscribe(response => {
        console.log('Email sent sucessfully',response)
        window.location.reload();
      },
      error =>
      console.error('Failed to send the email',error)
      )
    }
  }
  

 }
