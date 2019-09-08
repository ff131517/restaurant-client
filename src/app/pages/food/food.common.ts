export enum FoodType {
  Unknow = 0,
  Sichuan = 1,
  Dongbei = 2,
  Guangdong = 3
}
export class Food {
  name = "";
  id = 0;
  imgUrl = "";
  price = 0;
  desc = "";
  // tag: string[] = []; //凉菜 热门个
  type:FoodType = 0; //枚举
}