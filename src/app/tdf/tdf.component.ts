import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  
  constructor() {}

  std = new Student("prem",23,'as@h');


  save(formData:any){
    // console.log(formData);
    // const std = new Student(formData.name,formData.age,formData.email)
     console.log(this.std)
  }

}
