import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {environment} from '../../../environments/environment.prod';
import {NgxSpinnerService} from 'ngx-spinner';

const PRODUCT_API = environment.apiEndpoint + '/api/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT43JMDb6bteHLIF9_oXUXrGjaaOBSAYYMAgA&usqp=CAU';
  public properties: Array<any>;
  public term: string;

  constructor(private userServce: ServiceService, private spinner: NgxSpinnerService) {
    this.spinner.show('homes');
  }

  ngOnInit(): void {
    this.userServce.getAll(PRODUCT_API).subscribe(data => {
      this.properties = data.hits.hits;
      this.spinner.hide('homes');

    });
  }

}
