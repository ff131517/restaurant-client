import { Component, OnInit } from "@angular/core";
import { FoodType, Food } from "../food.common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
interface Response<T> {
  data: T;
}
@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"]
})
export class FoodListComponent implements OnInit {
  todos$: Observable<Food[]>;
  constructor(private http: HttpClient) {}
  foods: Food[] = [];

  ngOnInit() {
    this.getFoodList()
  }
  insertFood() {
    const headers = new HttpHeaders().set(
      "Content-type",
      "application/json; charset=UTF-8"
    );
    this.http
      .post(
        "http://127.0.0.1:3000/food/createFood",
        new Food({
          id: 0,
          name: "糖醋里脊",
          type: 1,
          imgUrl: "1",
          desc: "啦啦",
          price: 100.5
        }),
        { headers }
      )
      .subscribe(
        val => {
          console.log("Post call successful value returned in body", val);
        },
        error => {
          console.log("Post call in error", error);
        },
        () => {
          console.log("The Post observable is now completed.");
        }
      );
  }
  getFoodList() {
    console.log(environment)
    this.http.get("food/getList").subscribe((res:Response<Food[]>) => {
    this.foods =res.data
    });
  }
  delFood(id:number){
    this.http.post("food/delete",{id}).subscribe(res=>{
      console.log(res)
      this.getFoodList()
    })
  }
}
