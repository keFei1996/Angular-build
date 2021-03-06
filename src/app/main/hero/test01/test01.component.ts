import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as echarts from "echarts";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss'],
  providers: [ HttpClient]
})
export class Test01Component implements OnInit , AfterViewInit{
  options;
  myChart;
  mapEv;


  // echarts = require('echarts');
  @ViewChild('main') main: ElementRef;

  onMapInit(ev) {
    // this.mapEv = ev;
  }
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getMaps();
    this.mapEv = echarts.init(this.main.nativeElement);
    this.mapEv.setOption(this.option());

    // this.mapEv = this.es.init(this.main.nativeElement);
    // console.log(this.mapEv);
    // // console.log(this.mapEv);
    // this.mapEv.setOption({
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {},
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [{
    //     name: '销量',
    //     type: 'bar',
    //     data: [5, 20, 36, 10, 10, 20]
    //   }]
    // });
  }


  ngAfterViewInit() {
    // console.log(this.es);
    // setTimeout(() => {
    //  this.mapEv = this.es.init(this.main.nativeElement);
    //  console.log(this.mapEv);
    //   // console.log(this.mapEv);
    //   this.mapEv.setOption({
    //     title: {
    //       text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [{
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }]
    //   });
    // }, 1000);
  }

  option() {
    return {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }

  getMaps() {
    $('button').on('click', function () {
      alert('可以使用了');
    });

    this.http.get('assets/data/china.json')
      .subscribe(geoJson => {
        // hide loading:
        // register map:
        echarts.registerMap('china', geoJson);
        // update options:
        this.options = {
          title : {
            text: '订单量',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip : { // 提示框组件。
            trigger: 'item' // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
          },
          legend: {
            orient: 'horizontal', // 图例的排列方向
            x: 'left', // 图例的位置
            data: ['订单量']
          },

          visualMap: {// 颜色的设置  dataRange
            x: 'left',
            y: 'center',
            splitList: [
              {start: 1500},
              {start: 900, end: 1500},
              {start: 310, end: 1000},
              {start: 200, end: 300},
              {start: 10, end: 200, label: '10 到 200（自定义label）'},
              {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'},
              {end: 10}
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
          },
          toolbox: {// 工具栏
            show: true,
            orient : 'vertical', // 工具栏 icon 的布局朝向
            x: 'right',
            y: 'center',
            feature : {// 各工具配置项。
              mark : {show: true},
              dataView : {show: true, readOnly: false}, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
              restore : {show: true}, // 配置项还原。
              saveAsImage : {show: true}// 保存为图片。
            }
          },
          roamController: {// 控制地图的上下左右放大缩小 图上没有显示
            show: true,
            x: 'right',
            mapTypeControl: {
              'china': true
            }
          },
          series : [
            {
              name: '订单量',
              type: 'map',
              mapType: 'china',
              roam: false,                        // 是否开启鼠标缩放和平移漫游
              itemStyle: {// 地图区域的多边形 图形样式
                normal: {// 是图形在默认状态下的样式
                  label: {
                    show: true, // 是否显示标签
                    textStyle: {
                      color: 'rgb(249, 249, 249)'
                    }
                  }
                },
                emphasis: {  // 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                  label: {show: true}
                }
              },
              top: '3%',  // 组件距离容器的距离
              data: [
                {name: '北京', value: Math.round(Math.random() * 2000)},
                {name: '天津', value: Math.round(Math.random() * 2000)},
                {name: '上海', value: Math.round(Math.random() * 2000)},
                {name: '重庆', value: Math.round(Math.random() * 2000)},
                {name: '河北', value: 0},
                {name: '河南', value: Math.round(Math.random() * 2000)},
                {name: '云南', value: 5},
                {name: '辽宁', value: 305},
                {name: '黑龙江', value: Math.round(Math.random() * 2000)},
                {name: '湖南', value: 200},
                {name: '安徽', value: Math.round(Math.random() * 2000)},
                {name: '山东', value: Math.round(Math.random() * 2000)},
                {name: '新疆', value: Math.round(Math.random() * 2000)},
                {name: '江苏', value: Math.round(Math.random() * 2000)},
                {name: '浙江', value: Math.round(Math.random() * 2000)},
                {name: '江西', value: Math.round(Math.random() * 2000)},
                {name: '湖北', value: Math.round(Math.random() * 2000)},
                {name: '广西', value: Math.round(Math.random() * 2000)},
                {name: '甘肃', value: Math.round(Math.random() * 2000)},
                {name: '山西', value: Math.round(Math.random() * 2000)},
                {name: '内蒙古', value: Math.round(Math.random() * 2000)},
                {name: '陕西', value: Math.round(Math.random() * 2000)},
                {name: '吉林', value: Math.round(Math.random() * 2000)},
                {name: '福建', value: Math.round(Math.random() * 2000)},
                {name: '贵州', value: Math.round(Math.random() * 2000)},
                {name: '广东', value: Math.round(Math.random() * 2000)},
                {name: '青海', value: Math.round(Math.random() * 2000)},
                {name: '西藏', value: Math.round(Math.random() * 2000)},
                {name: '四川', value: Math.round(Math.random() * 2000)},
                {name: '宁夏', value: Math.round(Math.random() * 2000)},
                {name: '海南', value: Math.round(Math.random() * 2000)},
                {name: '台湾', value: Math.round(Math.random() * 2000)},
                {name: '香港', value: Math.round(Math.random() * 2000)},
                {name: '澳门', value: Math.round(Math.random() * 2000)}
              ]
            }
          ]
        };
      });
  }
}
