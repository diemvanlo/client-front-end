import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

const PRODUCT_API = "http://localhost:8080/api/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public properties: Array<any>;
  public term: string;

  constructor(private userServce: ServiceService) {
  }

  ngOnInit(): void {
    this.userServce.getAll(PRODUCT_API).subscribe(data => {
      this.properties = data;
    })
  }

}
