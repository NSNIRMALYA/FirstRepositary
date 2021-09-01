import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username!: string;
  Password!:string;
  searchtxt: string = "";
  constructor(private http: HttpClient, private routers: Router, private stdservice: StudentService) { 
    
  }

  ngOnInit() {
  }

  loginUser()
  {
    alert(this.stdservice.addTwoNumbers(7,8));
    this.stdservice.prop = 8;
     if(this.Username=="Admin" && this.Password=="Password")
    {
      console.log("Welcome");
      this.routers.navigate(['welcome'])
    }
  }


}

