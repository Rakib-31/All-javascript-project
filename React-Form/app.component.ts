import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {validateFunction, passwordValidateFunction} from './validator-classs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'react-form';
  formModel: FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    this.formModel = this.fb.group({
      username:['Rakib',[Validators.required, Validators.minLength(3),
                validateFunction(/admin/)]],

      email:[''],

      subscribe:[false],

      password:['',[Validators.required, Validators.minLength(8),
               validateFunction(/password/)]],

      confirmPassword:['',[Validators.required, Validators.minLength(8)]],

      address: this.fb.group({
        city:['', Validators.required],
        state:[''],
        postalcode:['',Validators.required]
      })
      }, {validator: passwordValidateFunction});

      this.formModel.get('subscribe').valueChanges
      .subscribe(checkedValue=>{
      const email = this.emailValidate;
      if(checkedValue)
        email.setValidators(Validators.required);
      else email.clearValidators();
      email.updateValueAndValidity();
    });
  }


    

  get userValidate(){
    return this.formModel.get('username');
  }

  get emailValidate(){
    return this.formModel.get('email');
  }
  get passwordValidate(){
    return this.formModel.get('password');
  }

  

  
  
  
}
