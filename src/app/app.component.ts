import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentEntity } from './entity/student.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'STUDENT PROJECT';
  num1: number =7;

  constructor(private http: HttpClient) { }
  studentObj: Array<StudentEntity> = [{
    rollNo: 1,
    name: "NIRMALYA",
    isphychal: true,
    section: "C"
  }, {
    rollNo: 2,
    name: "DIGBIJAY",
    isphychal: false,
    section: "D"
  }];
  showName: boolean = true;

  menuItems: Array<string> = ["Home", "About", "Expertise", "Teams", "Works", "people Say", "Contact"];
  boolv: boolean = true;

  recievingMenuName(eventmenuname: string){
    console.log("This is from parent component", eventmenuname);
  }
  resetButton() {
    this.boolv = !this.boolv;
    if (this.boolv) {
      this.menuItems = ["Home", "About", "Expertise", "Teams", "Works", "people Say", "Contact"];
    }
    else {
      this.menuItems = [];
    }
  }
  ngOnInit() {
    this.http.get("https://localhost:44362/StudentData/GetRandom").subscribe
      ((data: any) => {
        this.studentObj = data;
        console.log("inside getcall");
      })
    console.log("After getcall");

  }
}
