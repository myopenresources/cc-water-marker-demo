# Angular 版本水印指令

## 安装
npm install cc-water-marker --save  或 yarn add  cc-water-marker

## 使用

```javascript
// 业务模块
import { WaterMarkerModule } from 'cc-water-marker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WaterMarkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//业务html，水印宽高是根据元素的宽高定的，请通过css设置元素的宽高
<div class="div" ccWaterMarker [options]="options" [zIndex]="8"></div>

//业务组件
import { Component } from '@angular/core';
import { WaterMarkerOptionModel } from 'cc-water-marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  options: WaterMarkerOptionModel = {
    watermarkLabel: '这是一个水印'
  };
}


```

## 参数
1. options:WaterMarkerOptionModel; 具体参数如下：<br>
// 水印文本<br>
watermarkLabel?: string;<br>
// 水印起始位置x轴坐标<br>
watermarkX?: number;<br>
// 水印起始位置Y轴坐标<br>
watermarkY?: number;<br>
// 水印x轴间隔<br>
watermarkXSpace?: number;<br>
// 水印y轴间隔<br>
watermarkYSpace?: number;<br>
// 水印字体颜色<br>
watermarkColor?: string;<br>
// 水印字体大小<br>
watermarkFontSize?: string;<br>
// 水印透明度，要求设置在大于等于0.003<br>
watermarkAlpha?: number;<br>
// 水印宽度<br>
watermarkWidth?: number;<br>
// 水印高度<br>
watermarkHeight?: number;<br>
// 水印倾斜度数<br>
watermarkAngle?: number;<br>
// 是否显示<br>
showWaterMark?: boolean;<br>
// 分割符号<br>
splitChar?: string;<br>



2. zIndex:number; 层级，默认值为999<br>
