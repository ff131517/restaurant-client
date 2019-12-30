import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { UploadFile } from "ng-zorro-antd/upload";
import { Observable, Observer } from "rxjs";
import { FoodType } from "../food.common";
@Component({
  selector: "app-food-detail",
  templateUrl: "./food-detail.component.html",
  styleUrls: ["./food-detail.component.scss"]
})
export class FoodDetailComponent implements OnInit {
  validateForm: FormGroup;
  listOfOption: Array<{ label: string; value: number }> = [];
  loading = false;
  constructor(private fb: FormBuilder, private msg: NzMessageService) {}
  ngOnInit(): void {
    this.listOfOption = [{ label: "东北菜", value: FoodType.Dongbei }, { label: "粤菜", value: FoodType.Guangdong }, { label: "川菜", value: FoodType.Sichuan }];
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      price: [null, [Validators.required]],
      type: [null, [Validators.required]],
      imgUrl: [null, [Validators.required]]
    });
  }



  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm)
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


}
