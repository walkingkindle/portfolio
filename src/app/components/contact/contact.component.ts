import { Component, OnInit } from '@angular/core';
import emailjs,{type EmailJSResponseStatus} from '@emailjs/browser'
import { environment } from '../../../environments/environment.local';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[FormsModule,CommonModule,ReactiveFormsModule],
  standalone:true
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router:Router) { }

 contactForm!: FormGroup; 

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required]
    })
    emailjs.init(
      {
        publicKey:environment.emailJSPublicKey,
        blockHeadless:true,
      }
    )
  }

  async ngOnSubmit(){
    console.log('submitted!')
    if(this.contactForm.valid){
      console.log('valid')
      const formData = this.contactForm.value;
      await this.sendEmail(formData)
      this.router.navigate(["/"]) 
    }
  }
  

  private sendEmail(formData:any){
    emailjs.send(environment.emailServiceId,environment.emailTemplateId,{
      from_name:formData.name,
      from_email:formData.email,
      message:formData.message
    }).then((response:EmailJSResponseStatus) => {
      console.log('Email sent sucessfully',response);
    },(error) => {
      console.error('Error sending mail',error)
    })
  }

}
