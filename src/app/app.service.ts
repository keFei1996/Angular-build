import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = '../assets/data/';
  constructor(
    private http: HttpClient,
  ) {}

  //获取菜单数据
  getMenu() {
    return this.http.get(this.baseUrl + 'menu.json');
  }

}
