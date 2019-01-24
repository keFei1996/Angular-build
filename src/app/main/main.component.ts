import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  initialCount: number = 5;

  changeMsg: string;
  menuData: any = [];  //菜单数据源

  countChange(event: number) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  //获取菜单
  getMenu() {
    this.appService.getMenu().subscribe((res: any) => {
      this.menuData = res.data;
      console.log(this.menuData);
    });
  }

}
