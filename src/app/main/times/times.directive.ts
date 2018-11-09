import {Directive, Input, Output, EventEmitter, ElementRef, AfterViewInit, OnChanges} from '@angular/core';
import moment = require('moment');
@Directive({
  selector: '[appTimes]'
})
export class TimesDirective implements AfterViewInit , OnChanges {
  @Input('appTimes') options: any;
  @Output() applyDaterangepicker = new EventEmitter<any>();
  @Output() hideDaterangepicker = new EventEmitter<any>();

  defaultConfig = {
    locale: {
      format: 'YYYY-MM-DD',
      applyLabel: '确定',
      cancelLabel: '取消'
    },
    parentEl: '.page-wrap',
    buttonClasses: 'button-base button-sm',
    applyClass: 'button-handle',
    cancelClass: 'button-default',
    startDate: moment().format('L'),
    endDate: moment().format('L'),
  };
  private opt = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // 单列
    if (this.options === 'single' || this.options.type === 'single') {
      this.opt = {singleDatePicker: true};
    }

    // 快捷菜单
    if (this.options === 'ranges' || this.options.type === 'ranges') {
      this.opt = {
        ranges: {
          '今天': [moment().format('L'), moment().format('L')],
          '昨天': [moment().subtract(1, 'days').format('L'), moment().subtract(1, 'days').format('L')],
          '本周': [moment().startOf('week').format('L'), moment().endOf('week').format('L')],
          '上周': [moment().subtract(1, 'week').startOf('week').format('L'), moment().subtract(1, 'week').endOf('week').format('L')],
          '本月': [moment().startOf('month').format('L'), moment().endOf('month').format('L')],
          '上月': [moment().subtract(1, 'months').startOf('month').format('L'), moment().subtract(1, 'months').endOf('month').format('L')]
        },
        showCustomRangeLabel: false,
        alwaysShowCalendars: true,
        applyClass: 'button-minor'
      };
    }
    // 参数
    if (this.options.param && this.options.param instanceof Object) {
      this.opt = $.extend(true, this.opt, this.options.param);
    }

    // 合并配置参数
    this.opt = $.extend(true, {}, this.defaultConfig, this.opt);

    // 清空默认值
    if (this.options === 'empty' || this.options.empty) {
      this.opt = Object.assign(this.opt, {startDate: undefined, endDate: undefined});
    }

    // $(this.el.nativeElement).daterangepicker(this.opt).on({
    //   'apply.daterangepicker': (ev, picker) => this.applyDaterangepicker.emit(picker),  // 点击确定按钮时触发
    //   'hide.daterangepicker': (ev, picker) => this.hideDaterangepicker.emit(picker),  // 当picker被隐藏时触发
    // });
  }

  ngOnChanges() {
    this.ngAfterViewInit();
  }
}
