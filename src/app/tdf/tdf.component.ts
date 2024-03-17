import { Component } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  
  constructor() {
    this.std.country="";
  }

  std = new Student();


  save(formData:any){
    // console.log(formData);
    // const std = new Student(formData.name,formData.age,formData.email)
     console.log(this.std)
     formData.reset();
  }

  resetForm(FormData:NgForm){
    FormData.resetForm();
  }
}
