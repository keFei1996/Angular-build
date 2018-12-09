import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements  OnInit {
  memberSexData: any = [];
  constructor() {}
  ngOnInit() {
    this.memberSexData.push({name: '女', value: ['80'], type: 'bar', stack: 'one'});
    this.memberSexData.push({name: '男', value: ['70'], type: 'bar', stack: 'one'});
    this.memberSexData.map(item => {
      return Object.assign(item, {
        barWidth: 70,
        type: ' bar',
        stack: 'one',
        data: item.value
      });
    });
    console.log(this.memberSexData);
  }
  // zhu

}
