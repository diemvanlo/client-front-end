import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

declare var $: any;

const PRODUCT_API = "http://localhost:8080/api/product";
const PROJECT_API = "http://localhost:8080/api/project";

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit {

  public properties: Array<any>;
  public term: string;
  public id: any;

  constructor(private userService: ServiceService) {
  }

  ngOnInit(): void {
    this.userService.get(PRODUCT_API, this.id).subscribe(data => {
      this.id = data;
    })

    // this.userService.getAll(PRODUCT_API).subscribe(data => {
    //   this.properties = data;
    // })
  }

}
