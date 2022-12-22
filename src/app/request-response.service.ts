import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestResponseService {

  constructor(private httpClient: HttpClient) { }

  getCaptcha() {
    const headers = new HttpHeaders().append('content-Type', 'text/plain');
    return this.httpClient.get('http://localhost:8080/refreshCaptcha', { responseType: 'text' });

  }
  getAllbanks() {
    const headers = new HttpHeaders().append('content-Type', 'text/plain');
    return this.httpClient.get("http://localhost:8080/getAllBanks");
  }

  getAllStateNames() {
    const headers = new HttpHeaders().append('content-Type', 'text/plain');
    return this.httpClient.get("http://localhost:8080/getAllStateNames");

  }
 
  public mainpagedetails(login1:any) {
    return this.httpClient.post("http://localhost:8080/login", login1, { responseType: 'text' as 'json' });
  }

  public dologin() {
    return this.httpClient.post("http://localhost:8080/login", { responseType: 'text' as 'json' });
  }

}





