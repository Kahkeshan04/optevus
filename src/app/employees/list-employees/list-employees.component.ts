import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  Pagetitle: string = "OPTEVUS Employee  Details";
  showImages: boolean = false;
  
  listFilter: string = "";
  toggleImage() {
    this.showImages = !this.showImages;
  }

  employees: Employee[] = [
    {
      id: 1234,
      name: "Vijaya Rani",
      gender: 'Female',
      contactPreference: 'Email',
      email: 'vijayarani@softpath.net',
      phoneNumber: 9652733447,
      // DOB:new Date(10/25/1988) ,
      DOB:"10/25/1988",
      position: "Team Lead",
      // isActive: true,
      imageUrl: "assets/images/mary.png",
      package: '15LPA',
    },
    {
      id: 1235,
      name: "Greesh Kapila",
      gender: 'Male',
      contactPreference: 'Phone',
      email: "Gireeshkapila@softpath.net",
      phoneNumber: 9652733554,
      // DOB:new Date(11/20/1979) ,
      DOB:"10/25/1988",
      position: 'Senior Architect',
      // isActive: true,
      imageUrl: "assets/images/john.png",
      package: "15LPA",
    },
    {
      id: 1236,
      name: "Praveen Peddinti",
      gender: 'Male',
      contactPreference: 'Phone',
      email: "praveenpeddinti@softpath.net",
      phoneNumber: 9658473281,
      // DOB: new Date(3/25/1976),
      DOB:"10/25/1988",
      position: 'Team Lead',
      // isActive: false,
      imageUrl: "assets/images/john.png",
      package: '15LPA',
    },
    {
      id: 1237,
      name: "Sandeep Kumar",
      gender: 'Male',
      contactPreference: 'Phone',
      email: "sandeepkumar.g@softpath.net",
      phoneNumber: 6589741355,
      // DOB: new Date(3/25/1976),
      DOB:"10/25/1988",
      position: 'Associate Director',
      // isActive: false,
      imageUrl: "assets/images/mark.png",
      package: '15LPA,'
    },
    {
      id: 1237,
      name: "Harish Kumar",
      gender: 'Male',
      contactPreference: 'Phone',
      email: "harishkumar.b@softpath.net",
      phoneNumber: 6984759135,
      // DOB: new Date(3/25/1976),
      DOB:"10/25/1988",
      position: 'Sr.Associate Director',
      // isActive: false,
      imageUrl: "assets/images/mark.png",
      package: '15LPA',
    },
    {
      id: 1238,
      name: "Pavan Kalyan Chillapalli",
      gender: 'Male',
      contactPreference: 'Phone',
      email: "pavankalyan.ch@softpath.net",
      phoneNumber: 9587462358,
      // DOB: new Date(3/25/1976),
      DOB:"10/25/1988",
      position: 'Full Stack Developer',
      // isActive: false,
      imageUrl: "assets/images/john.png",
      package: '15LPA',
    },
    {
      id: 1239,
      name: "Chidurala Divya",
      gender: 'Female',
      contactPreference: 'Phone',
      email: "divyachidurala@softpath.net",
      phoneNumber: 8965413879,
      // DOB: new Date(3/25/1974),
      DOB:"10/25/1988",
      position: 'Jr Developer',
      // isActive: false,
      imageUrl: "assets/images/mary.png",
      package: '15LPA',
    },
  ];


}
