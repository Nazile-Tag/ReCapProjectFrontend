import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {

  brands: Brand[]
  brandId: number = 0
  colors: Color[]
  colorId: number = 0
  carAddForm: FormGroup;
  car: Car;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands()
    this.getColors()
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
    })
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data
    })
  }

  add() {
    if (this.carAddForm.invalid) {
      return this.toastrService.warning("Boş alan bırakmayınız", "Dikkat");
    }

    this.car = this.carAddForm.value

    this.carService.add(this.car).subscribe(responseSuccess => {
      this.toastrService.success(responseSuccess.message, "Başarılı")
      return this.router.navigateByUrl("/")
    })

    return true;
  }
}
