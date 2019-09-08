import { Component, OnInit } from '@angular/core';
import {FoodType, Food} from "../food.common"

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.foods.push(new Food())
  }
  foods:Food[] = [
    {
      id:1,
      name:'锅包肉',
      imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567942996048&di=e2196e02bd7b0a93c47195cd7cf79f3c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180211%2Ff6402049e04f4a7e849b32af5d75b1ef.jpeg",
      price:45,
      desc:"酸甜可口",
      type:FoodType.Dongbei
    },
    {
      id:2,
      name:'鱼香肉丝',
      imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567943235320&di=7cbaf312912f5570fecd588956bed44f&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft23356%2F114%2F2054484796%2F33830%2F3e2834e%2F5b7175dbNa791d15a.jpg",
      price:32,
      desc:"没有鱼",
      type:FoodType.Sichuan
    },
    {
      id:3,
      name:'白切鸡',
      imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567943318581&di=daf5ee5f2bed27792a9e7e47cf5dba90&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_10_21%2Fa6yau88741143231542.jpeg",
      price:52,
      desc:"没煮熟就吃",
      type:FoodType.Guangdong
    }
  ];
}
