import { Component, OnInit } from '@angular/core';
import {FoodType, Food} from '../food.common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  todos$: Observable<Food[]>;
  constructor(private http: HttpClient) { }
  foods: Food[] = [
    {
      id: 1,
      name: '锅包肉',
      imgUrl: '',
      price: 45,
      desc: '酸甜可口',
      type: FoodType.Dongbei
    },
    {
      id: 2,
      name: '鱼香肉丝',
      imgUrl: '',
      price: 32,
      desc: '没有鱼',
      type: FoodType.Sichuan
    },
    {
      id: 3,
      name: '白切鸡',
      imgUrl: '',
      price: 52,
      desc: '没煮熟就吃',
      type: FoodType.Guangdong
    }
  ];

  ngOnInit() {

    const headers = new HttpHeaders().set(
      'Content-type',
      'application/json; charset=UTF-8'
    );
    this.http
        .post(
          'http://127.0.0.1:3000/food/createFood',
          new Food({
            id: 0,
            name: '糖醋里脊',
            type: 1,
            imgUrl: '1',
            desc: '啦啦',
            price: 100.5
          }),
          { headers }
        )
        .subscribe(
          val => {
            console.log('Post call successful value returned in body', val);
          },
          error => {
            console.log('Post call in error', error);
          },
          () => {
            console.log('The Post observable is now completed.');
          }
        );
    }
    // const params = new HttpParams({ fromObject: { _page: '1', _limit: '10' } });

    // this.todos$ = this.http.get<Food[]>(
    //   'http://127.0.0.1:3000/food/getFoodList',
    //   {params},
    // ).pipe(tap(console.log));
    // this.todos$.subscribe(res => {
    //   console.log(res);
    //   this.foods = res;
    // });

  //  .subscribe(res => {
  //     console.log(res);
  //   });
    // this.todos$.toPromise().then(val => {
    //   console.log(val);
    // });
    // this.foods.push(new Food())
  }





