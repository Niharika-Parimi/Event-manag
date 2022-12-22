import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mainpagedetails } from '../mainpagedetails';
import { RequestResponseService } from '../request-response.service';

@Component({
  selector: 'app-mainpage1',
  templateUrl: './mainpage1.component.html',
  styleUrls: ['./mainpage1.component.css']
})
export class Mainpage1Component implements OnInit {
  mainpagedet: Mainpagedetails = new Mainpagedetails("", "", "","","");


  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    date: new FormControl('',[Validators.required]),
    venue:new FormControl('',[Validators.required])

  })
  constructor(private service: RequestResponseService) { }

  ngOnInit(): void {
  }

  dologin() {
    this.service.mainpagedetails(this.mainpagedet).subscribe(mainpage => {
      console.log(mainpage);
    })
  }
  onSubmit(data: any) {
  
  }

  get username()
  {
    return this.loginForm.get('username');
  }

  get email()
  {
    return this.loginForm.get('email');
  }

  get phone()
  {
    return this.loginForm.get('phone');
  }
  get venue()
  {
    return this.loginForm.get('venue');
  }
  get date()
  {
    return this.loginForm.get('date');
  }

}
