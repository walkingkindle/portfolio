import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailData } from '../EmailData';

@Injectable()
export class MailService {

constructor(private httpClient:HttpClient) { }

apiUrl:string = "http://localhost:5001/api/Email/mail"


sendmail(emailData:EmailData):Observable<any>{
    console.log(emailData)
    console.log(`${this.apiUrl}/${emailData}`)
    return this.httpClient.post(`${this.apiUrl}`,emailData)
}

}
