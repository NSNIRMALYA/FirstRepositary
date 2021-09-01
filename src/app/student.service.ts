import { Injectable } from '@angular/core';

//@Injectable({
  //providedIn: 'root'
//})
@Injectable()
export class StudentService {
 prop: number  = 0
  constructor() { }

  addTwoNumbers(a: number, b: number){
    return a+b;
  }
}
