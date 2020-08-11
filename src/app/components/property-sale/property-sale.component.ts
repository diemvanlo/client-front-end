import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

const PRODUCT_API = "http://localhost:8080/api/product"

@Component({
  selector: 'app-property-sale',
  templateUrl: './property-sale.component.html',
  styleUrls: ['./property-sale.component.css']
})
export class PropertySaleComponent implements OnInit {

  public propertiesSale: Array<any>;
  private term: string;

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {
    this.userService.getAll(PRODUCT_API).subscribe(data =>{
      this.propertiesSale = data;
    })
  }

}
