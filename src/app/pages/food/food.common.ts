export enum FoodType {
  Unknow = 0,
  Sichuan = 1,
  Dongbei = 2,
  Guangdong = 3
}
export class Food {
  constructor(param?: Food) {
    this.name = param.name;
    this.id = param.id;
    this.imgUrl = param.imgUrl;
    this.price = param.price;
    this.desc = param.desc;
    this.type = param.type;
  }
  name = '';
  id = 0;
  imgUrl = '';
  price = 0;
  desc = '';
  // tag: string[] = []; //凉菜 热门个
  type: FoodType = 0; // 枚举
}
