import {Component, OnInit, Pipe} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {HttpsServiceService} from "../../service/https-service.service";
import {Router} from "@angular/router";

declare var $: any;

const PROJECT_API = "https://safe-citadel-42709.herokuapp.com/api/project";
const PRODUCT_API = "https://safe-citadel-42709.herokuapp.com/api/product";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  public projects: Array<any>;
  public products: Array<any>;

  constructor(private userService: ServiceService, public router: Router) {
  }

  ngOnInit(): void {
    this.userService.getAll(PROJECT_API).subscribe(data => {
      this.projects = data;
    })
  }

  privew(id: string) {
    this.router.navigate(['/project/view-product/'], {queryParams: {id: id}});
  }
}
