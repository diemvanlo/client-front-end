import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpsServiceService} from "../../service/https-service.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment.prod";

declare var $: any;
declare const pano2vrPlayer: any;
declare const pano2vrSkin: any;

const PRODUCT_API = environment.apiEndpoint + '/api/product';
const GET_PROPERTY_DETAIL_API = PRODUCT_API + '/getProductId';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, AfterViewInit {

  public property: any;

  constructor(private userService: HttpsServiceService,
              private route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    let pano = new pano2vrPlayer('containerPano');
    let skin = new pano2vrSkin(pano);
    pano.readConfigUrlAsync('assets/pano.xml');
  }

  ngOnInit(): void {
    //Load Init
    this.getPropertyDetail()
  }
  getPropertyDetail(){
    this.userService.get(GET_PROPERTY_DETAIL_API, this.route.snapshot.queryParamMap.get('id')).subscribe(data => {
      this.property = data;
    })
  }
}
