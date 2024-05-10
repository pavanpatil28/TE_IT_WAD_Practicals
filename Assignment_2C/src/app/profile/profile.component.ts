import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  
  // user_records:any[]=[];
  datas={
    name:"",
    email:"",
    age:"",
    city:"",
    password:""
  }
  

  ngOnInit(): void {
    let data =JSON.parse(localStorage.getItem('data')||'{}')
    this.datas.name = data.name
    this.datas.email = data.email
    this.datas.age = data.age
    this.datas.city = data.city
  }

  
}