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
  avatarUrl: string;
  constructor(private fb: FormBuilder, private msg: NzMessageService) {}
  ngOnInit(): void {
    this.listOfOption = [{ label: "东北菜", value: FoodType.Dongbei }, { label: "粤菜", value: FoodType.Guangdong }, { label: "川菜", value: FoodType.Sichuan }];
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      price: [null, [Validators.required]],
      type: [null, [Validators.required]]
    });
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.msg.error("You can only upload JPG file!");
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("Image must smaller than 2MB!");
        observer.complete();
        return;
      }
      // check height
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.msg.error("Image only 300x300 above");
          observer.complete();
          return;
        }

        observer.next(isJPG && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(width === height && width >= 300);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case "uploading":
        this.loading = true;
        break;
      case "done":
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case "error":
        this.msg.error("Network error");
        this.loading = false;
        break;
    }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
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

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
}
