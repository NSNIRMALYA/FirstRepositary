import { Component, OnInit } from '@angular/core';
import { StudentEntity } from '../entity/student.entity';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [StudentService]
})
export class WelcomeComponent implements OnInit {

  studentList: Array<StudentEntity>  = [];
  constructor(private stdservice1: StudentService) { }

  ngOnInit(): void {
    alert(this.stdservice1.prop + " Welcome page");
  }

}
