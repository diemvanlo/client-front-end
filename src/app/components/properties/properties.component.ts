import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from 'src/app/service/https-service.service';
import { environment } from 'src/environments/environment.prod';

const PAYPAL_API = 'http://localhost:8080'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  number = 1;
  
  constructor(private userService: HttpsServiceService) { }

  ngOnInit(): void {
  }

  paypal() {
    this.userService.paypal(PAYPAL_API+ "/pay" , 1).subscribe(res => {
      console.log(res.message);
      window.open(res.message);
    })
  }
}
