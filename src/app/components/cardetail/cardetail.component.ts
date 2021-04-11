import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cars: CarDetail[] = [];
  car: CarDetail;
  carImages: CarImage[] = [];
  currentCar: CarDetail;
  currentImage: CarImage;
  imageUrl = "https://localhost:44349/";
  filterText = "";

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private carImageService: CarimageService, private cardetailService: CarDetailService, private toastrService: ToastrService, 
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailById(Number(params["carId"]))
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }

  setCurrentCar(car: CarDetail) {
    this.currentCar = car;
  }

  getCarsByCar(carId: number) {
    this.carService.getCarDtoById(carId).subscribe(response => {
      this.cars = response.data
    })
  }

  getImagesByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data
    });
  }

  getCarImageClass(carImage: CarImage) {

    if (this.currentImage == carImage) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  getCarDetailById(carId: number) {
    this.cardetailService.getCarDetails().subscribe(response => {
      this.cars = response.data
      this.car = this.cars.find(car => car.carId == carId)
    })
  }

  addToCart(car: CarDetail) {
    this.toastrService.success("Kiralanacak Araç Eklendi", car.brandName)
    this.cartService.addToCart;
  }
}
