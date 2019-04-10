import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  daterangepicker: any = {param: {timePicker: true,
      timePicker24Hour: true,
      locale: {
        format: 'YYYY-MM-DD HH:mm'
      },
      startDate : moment().format('L') + ' 00:00',
      endDate: moment().format('L') + ' 23:59'
    }};

  constructor() { }

  ngOnInit() {
  }


}
