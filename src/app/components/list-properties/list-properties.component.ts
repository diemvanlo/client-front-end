import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from 'ngx-spinner';

declare var $: any;

const PRODUCT_API = "https://safe-citadel-42709.herokuapp.com/api/product";
const GET_PRODUCT_BY_PROJECT_API = PRODUCT_API + "/getByProjectId";

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit {

  public properties: Array<any>;

  constructor(private route: ActivatedRoute,
              private router: Router, private userService: ServiceService, private spinner: NgxSpinnerService) {
    this.spinner.show('loading_list');
  }

  ngOnInit(): void {
    this.userService.getAll(PRODUCT_API).subscribe(data => {
      this.properties = data;
      this.spinner.hide('loading_list');
    })
    if (this.route.snapshot.queryParamMap.get('id') === '') {
      this.userService.getAll(PRODUCT_API).subscribe(data => {
        this.properties = data;
        this.spinner.hide('loading_list');
      })
    } else (
      this.userService.get(GET_PRODUCT_BY_PROJECT_API, this.route.snapshot.queryParamMap.get('id')).subscribe(data => {
        this.properties = data;
        this.spinner.hide('loading_list');
      })
    )

  }

}
