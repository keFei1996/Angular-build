import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
})
export class FormControlComponent implements OnInit {


  // @Input() count = 0;
  //
  // @Output() change: EventEmitter<number> = new EventEmitter<number>();

  // increment() {
  //   this.count++;
  //   this.change.emit(this.count);
  // }
  //
  // decrement() {
  //   this.count--;
  //   this.change.emit(this.count);
  // }

  constructor(

  ) {
  }

  ngOnInit() {
    // if( 11%3 && )
    // let a = { name: '前端开发'};
    // let b = a;
    // console.log(b);
    // console.log(a);
    // a = { name: '后端开发'};
    // console.log(b);
    // console.log(a);
    // a = null;
    // console.log(b);
    // console.log(a);
    // let tmp = new Date();
    //
    // function f() {
    //   console.log(tmp);
    //   if (false) {
    //     let tmp = 'hello world';
    //   }
    // }
    //
    // f();
    console.log(11 % 3 && 7 || 2 );
    console.log(11 % 3 && 7 );
  }




  zhu(x) {
    return Number.parseFloat(x).toFixed(2);
  }


}
