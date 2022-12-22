import { Component, OnInit } from '@angular/core';
import { RequestResponseService } from '../request-response.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Logindetails } from "../logindetails";
// import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logindetails: Logindetails = new Logindetails("", "", "");
  message: any;
  submittedform = false;
  // captchaImage;
  // Captcha;
  // Username;


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    captchaCode: new FormControl('')
  })
  // message1: string;
  constructor( private service: RequestResponseService,private formbuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.refreshCaptcha();


    this.loginForm = this.formbuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
        captchaCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
      },
    );
  }

  refreshCaptcha(): void {
    // this.service.getCaptcha().subscribe(captchaResponse => {
    //   this.Captcha = captchaResponse.slice(-6);
    //   captchaResponse = captchaResponse.substring(0, captchaResponse.length - 6);
    //   this.captchaImage = 'data:image/png;base64,' + captchaResponse;
    // })
  }

  get f(): { [key: string]: AbstractControl } {
    this.submittedform = true;
    return this.loginForm.controls;
  }

  dologin() {
    this.service.dologin().subscribe(data => {
     console.log(data);
     })
  }


  onSubmit(data: any) {
    console.log(data);
    this.dologin();
    // this.sharedData.setMessage(this.logindetails['username']);
    this.submittedform = true;
    this.router.navigate(['Userregistrationstatus']);
    // if (this.loginForm.valid && (data.controls['captchaCode'].value) == this.Captcha) {
  //     if ( this.loginForm.invalid|| this.loginForm.valid) {
  //     console.log(this.logindetails['username']);

  //     if (this.Username = (this.logindetails['username']).match('^[A-Z]{5}[0-9]{4}[A-Z]{1}')) {

  //        let resp = this.service.dologin(this.logindetails);
  //        resp.subscribe((data) => this.message = data);
  //        let resp1 = this.service.getmail();
  //        resp1.subscribe((data) => this.message1 = data);
  //        console.log("this.message1"+this.message1+"data"+data);
  //       this.router.navigate(['OTPpage']);

  //     }
  //     else if(this.Username = (this.logindetails['username']).match(/RBI/))
  //     {

  //       let resp = this.service.RBIlogin(this.logindetails);
  //       resp.subscribe((data) => this.message = data);
  //       this.router.navigate(['RBITokenpage']);
  //     }

  //     else {
        
  //       let resp = this.service.ADlogin(this.logindetails);
  //       resp.subscribe((data) => this.message = data);
  //       this.router.navigate(['Tokenpage']);
  //     }
  //   }
  //   else {
  //     this.loginForm.controls['captchaCode'].reset()
  //     alert(' Enter valid Captcha');
  //   }
   }

} 
