import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  // constructor(private router: Router){

  // }

  // user_records:any[]=[];

  data={
    email:"",
    password:""
  }

  doLogin(values:any){
    let data = JSON.parse(localStorage.getItem("data")||'{}');
    console.log(values, data);

    if(data.email == values.email && data.password == values.password){
      alert("Login successful")
    }else{
      alert("Login Failed ! Wrong credentials")
    }
    
  }
}
