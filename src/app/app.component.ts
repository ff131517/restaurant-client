import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  constructor(private _iconService: NzIconService) {
    //添加字体图标
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_1385235_e0jskp8bxea.js'
    });
  }
}
