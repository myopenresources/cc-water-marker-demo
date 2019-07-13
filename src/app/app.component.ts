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
