import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { UserService } from 'src/app/services/admin/user.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent implements OnInit {
  id: any
  constructor(private Users: UserService) { }
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  array: any = []

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.Users.getReunionByUser(this.id).subscribe(
      (data: any) => {
        console.log(data);
        data.forEach((x: any) => {
          this.array.push({
            title: x.title,
            start: x.date,
            color: x.date >= this.date ? 'green' : 'red'
          })
        }
        );

        this.calendarOptions.events = this.array;
        console.log(this.array)

      }
    );
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [


    ],
    eventColor: 'color'


  };
}
