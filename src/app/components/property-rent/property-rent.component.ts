import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

const PRODUCT_API = "https://safe-citadel-42709.herokuapp.com/api/product";

@Component({
  selector: 'app-property-rent',
  templateUrl: './property-rent.component.html',
  styleUrls: ['./property-rent.component.css']
})
export class PropertyRentComponent implements OnInit {

  public propertiesRent: Array<any>;
  private term: string;

  constructor(private userService: ServiceService) {
  }

  ngOnInit(): void {
    this.userService.getAll(PRODUCT_API).subscribe(data => {
      this.propertiesRent = data;
    })
  }

}
