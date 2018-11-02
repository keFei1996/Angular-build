import {Component, OnInit} from '@angular/core';
import {NgxEchartsService} from 'ngx-echarts';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgxEchartsService, HttpClient]
})
export class AppComponent  implements  OnInit {
  title = 'app';
  options;
  constructor(
    private http: HttpClient,
    private es: NgxEchartsService
  ) {}
  ngOnInit() {
    $('button').on('click', function () {
      alert('可以使用了');
    });

    // this.http.get('assets/data/HK.json')
    //   .subscribe(geoJson => {
    //     // hide loading:
    //     // register map:
    //     this.es.registerMap('HK', geoJson);
    //     // update options:
    //     this.options = {
    //       title: {
    //         text: '香港18区人口密度 （2011）',
    //         subtext: '人口密度数据来自Wikipedia',
    //         sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
    //       },
    //       tooltip: {
    //         trigger: 'item',
    //         formatter: '{b}<br/>{c} (p / km2)'
    //       },
    //       toolbox: {
    //         show: true,
    //         orient: 'vertical',
    //         left: 'right',
    //         top: 'center',
    //         feature: {
    //           dataView: { readOnly: false },
    //           restore: {},
    //           saveAsImage: {}
    //         }
    //       },
    //       visualMap: {
    //         min: 800,
    //         max: 50000,
    //         text: ['High', 'Low'],
    //         realtime: false,
    //         calculable: true,
    //         inRange: {
    //           color: ['lightskyblue', 'yellow', 'orangered']
    //         }
    //       },
    //       series: [
    //         {
    //           name: '香港18区人口密度',
    //           type: 'map',
    //           mapType: 'HK', // map type should be registered
    //           itemStyle: {
    //             normal: { label: { show: true } },
    //             emphasis: { label: { show: true } }
    //           },
    //           data: [
    //             { name: '中西区', value: 20057.34 },
    //             { name: '湾仔', value: 15477.48 },
    //             { name: '东区', value: 31686.1 },
    //             { name: '南区', value: 6992.6 },
    //             { name: '油尖旺', value: 44045.49 },
    //             { name: '深水埗', value: 40689.64 },
    //             { name: '九龙城', value: 37659.78 },
    //             { name: '黄大仙', value: 45180.97 },
    //             { name: '观塘', value: 55204.26 },
    //             { name: '葵青', value: 21900.9 },
    //             { name: '荃湾', value: 4918.26 },
    //             { name: '屯门', value: 5881.84 },
    //             { name: '元朗', value: 4178.01 },
    //             { name: '北区', value: 2227.92 },
    //             { name: '大埔', value: 2180.98 },
    //             { name: '沙田', value: 9172.94 },
    //             { name: '西贡', value: 3368 },
    //             { name: '离岛', value: 806.98 }
    //           ],
    //           nameMap: {
    //             'Central and Western': '中西区',
    //             'Eastern': '东区',
    //             'Islands': '离岛',
    //             'Kowloon City': '九龙城',
    //             'Kwai Tsing': '葵青',
    //             'Kwun Tong': '观塘',
    //             'North': '北区',
    //             'Sai Kung': '西贡',
    //             'Sha Tin': '沙田',
    //             'Sham Shui Po': '深水埗',
    //             'Southern': '南区',
    //             'Tai Po': '大埔',
    //             'Tsuen Wan': '荃湾',
    //             'Tuen Mun': '屯门',
    //             'Wan Chai': '湾仔',
    //             'Wong Tai Sin': '黄大仙',
    //             'Yau Tsim Mong': '油尖旺',
    //             'Yuen Long': '元朗'
    //           }
    //         }
    //       ]
    //     };
    //   });

    this.http.get('assets/data/china.json')
      .subscribe(geoJson => {
        // hide loading:
        // register map:
        this.es.registerMap('china', geoJson);
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
//            min: 0,
//            max: 2500,
//            calculable : true,//颜色呈条状
            text: ['高', '低'], // 文本，默认为数值文本
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
