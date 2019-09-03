import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food.routing';

import { FoodComponent } from './food.component';

@NgModule({
  imports: [FoodRoutingModule],
  declarations: [FoodComponent],
  exports: [FoodComponent]
})
export class FoodModule { }
