import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FoodRoutingModule } from './food.routing';
import { FoodListComponent } from './list/food-list.component';
import {FoodTypeFormate} from './list/food-list.pipe';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FoodDetailComponent } from './detail/food-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FoodRoutingModule, NgZorroAntdModule],
  declarations: [FoodListComponent, FoodDetailComponent, FoodTypeFormate],
  exports: [FoodListComponent, FoodDetailComponent]
})
export class FoodModule { }
