import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Registrationdetails } from "../registrationdetails"
import { RequestResponseService } from '../request-response.service';

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  PanPattern = "^[A-Z]{5}[0-9]{4}[A-Z]{1}";
  selected = "";
  BankList:any;
  StatesList:any;

  registerForm = new FormGroup({
    name: new FormControl(''),
    pannum: new FormControl(''),
    address1: new FormControl(''),
    city: new FormControl(''),
    State: new FormControl(''),
    pincode: new FormControl(''),
    mobnum: new FormControl(''),
    email: new FormControl(''),
    faxnum: new FormControl(''),
    Status: new FormControl(''),
    actcode: new FormControl(''),
    networth: new FormControl(''),
    contactp: new FormControl(''),
    dcp: new FormControl(''),
    AdBank: new FormControl(''),
   
  })

  // onChange(e) {
  //   this.selected = e.target.value
  // }

  regd: Registrationdetails = new Registrationdetails("", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  message: any;
  //selectedType: '';
  constructor(private service: RequestResponseService, private formbuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.getbanks();
    this.getAllStates();

    console.log(this.BankList);

    // this.registerForm = this.formbuilder.group(
    //   {
    //     pannum: ['', [Validators.required]],
    //     address1: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30),]],
    //     city: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    //     State: ['', [Validators.required]],
    //     mobnum: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    //     faxnum: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    //     pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    //     name: ['', [Validators.required]],
    //     email: ['', [Validators.required]],
    //     actcode: ['', [Validators.required]],
    //     networth: ['', [Validators.required]],
    //     contactperson: ['', [Validators.required]],
    //     desgcontactperson: ['', [Validators.required]],
    //     Status: ['', [Validators.required]],
    //     AdBank: ['', [Validators.required]],
    //   },
    // );
  }
  get f(): { [key: string]: AbstractControl } {

    return this.registerForm.controls;
  }
  public registerNow(data: any) {
    console.log("registerNow: regd"+this.regd);
    // let resp = this.service.doregistration(this.regd);
    // resp.subscribe((data) => this.message = data);


    // if (this.registerForm.valid) {
    //   alert("valid");
       this.router.navigate(['Registrationsuccessful']);
    // }
    // else {
    //   alert("invalid");
    //   return;
    // }

  }
  search() {
    alert('your nic code');
    // let resp = this.service.niccode(this.Registrationdetails);
    // resp.subscribe((data) => this.message = data);
  }
  getbanks(): void {
    this.service.getAllbanks().subscribe(captchaResponse => {
      console.log(captchaResponse);
      this.BankList = captchaResponse;
    })
  }
  getAllStates() {
    this.service.getAllStateNames().subscribe(captchaResponse => {
      this.StatesList = captchaResponse;
    })
  }
}
