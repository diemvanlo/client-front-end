import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {environment} from '../../../environments/environment.prod';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoadingService} from "../../service/loading.service";

const PRODUCT_API = environment.apiEndpoint + '/api/product';
declare var loadCar: Function;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT43JMDb6bteHLIF9_oXUXrGjaaOBSAYYMAgA&usqp=CAU';
  public properties: Array<any>;
  public properties_all: Array<any>;
  public properties_4: Array<any>;
  public term: string;

  constructor(private userServce: ServiceService, private spinner: NgxSpinnerService, private  reloadService: LoadingService) {
    this.spinner.show('homes');
  }

  ngOnInit(): void {
    //Load Init
    this.getProductSlide();
    // this.getProductFeatured();
    // this.getProductFeatured2();
  }

  getProductSlide(){
    this.userServce.getAll(PRODUCT_API).subscribe(data => {
      this.properties = data.filter((value,i) => i <= 2);
      this.spinner.hide('homes');
      this.reloadService.reloadJs();
    });
  }

  // getProductFeatured(){
  //   this.userServce.getAll(PRODUCT_API).subscribe(data => {
  //     this.properties_all = data.filter((value,i) => i <= 5);
  //     this.spinner.hide('homes');
  //     this.reloadService.reloadJs();
  //   });
  // }

  // getProductFeatured2(){
  //   this.userServce.getAll(PRODUCT_API).subscribe(data => {
  //     this.properties_4 = data.filter((value,i) => i <= 3);
  //     this.spinner.hide('homes');
  //     this.reloadService.reloadJs();
  //   });
  // }

}
