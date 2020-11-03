import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment.prod';

declare var $: any;

const PRODUCT_API = environment.apiEndpoint + '/api/product';
const GET_PRODUCT_BY_PROJECT_API = PRODUCT_API + '/getByProjectId';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit {

  DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT43JMDb6bteHLIF9_oXUXrGjaaOBSAYYMAgA&usqp=CAU';
  public properties: Array<any>;

  constructor(private route: ActivatedRoute,
              private router: Router, private userService: ServiceService) {
  }

  ngOnInit(): void {
    // this.userService.getAll(PRODUCT_API).subscribe(data => {
    //   this.properties = data;
    // });
    this.userService.searchAllColumn(PRODUCT_API, '').subscribe(data => {
      console.log(data.hits.hits);
      this.properties = data.hits.hits;
    });
    // if (this.route.snapshot.queryParamMap.get('id') === '') {
    //   this.userService.getAll(PRODUCT_API).subscribe(data => {
    //     this.properties = data;
    //   })
    // } else (
    //   this.userService.get(GET_PRODUCT_BY_PROJECT_API, this.route.snapshot.queryParamMap.get('id')).subscribe(data => {
    //     this.properties = data;
    //   })
    // )

  }

  onSearchChange(value: any) {
    console.log(value);
    this.userService.searchAllColumn(PRODUCT_API, value).subscribe(data => {
      console.log(data.hits.hits);
      this.properties = data.hits.hits;
    });
  }
}
