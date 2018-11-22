import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


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

  ) { }

  ngOnInit() {

    console.log(this.zhu(123.456));


    console.log(this.zhu(0));

    console.log(this.zhu(1));

    // console.log( parseInt(100%, 10).toFixed(2));
  }


  zhu(x) {
    return Number.parseFloat(x).toFixed(2);
  }


}
