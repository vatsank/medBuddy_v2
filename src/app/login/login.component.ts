import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

    formConfig = [
      {label: 'User Name', type: 'text', name: 'userName', constraint: Validators.required},
      {label: 'Pass Word', type: 'password', name: 'passWord', constraint: Validators.required}

    ];
  constructor(private service: ComponentInteractionService,
     private builder: FormBuilder, private router: Router)  { }

  ngOnInit() {

    this.loginForm = this.builder.group({});

     this.formConfig.forEach(eachconfig => {
       this.loginForm.addControl(eachconfig.name,
         new FormControl('', {validators: eachconfig.constraint}));
     });
  }

  signIn() {

    this.service.changeCurrentStatus('logged');

    const uname = this.loginForm.controls.userName.value;
    const pword = this.loginForm.controls.passWord.value;

    if (uname === 'india' && pword === 'delhi') {

      sessionStorage.setItem('status', 'logged');
          this.router.navigate(['home']);
    }

  }
}
