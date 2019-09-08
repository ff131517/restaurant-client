import { Pipe, PipeTransform } from '@angular/core';
import {FoodType} from "../food.common"
@Pipe({name: 'foodTypeFormate'})
export class FoodTypeFormate implements PipeTransform {
  transform(value: number) {
    if(value === FoodType.Dongbei ){
        return "东北菜"
    } else if (value === FoodType.Sichuan) {
        return "川菜"
    }  else if (value === FoodType.Guangdong) {
        return "粤菜"
    } else {
        return "其他"
    }
  }
}