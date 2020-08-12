import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {environment} from '../../../environments/environment.prod';

declare var $: any;

const PROJECT_API = environment.apiEndpoint + "/api/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects: Array<any>;
  public id: any;

  constructor(private userService: ServiceService) {
  }

  ngOnInit(): void {
    this.userService.getAll(PROJECT_API).subscribe(data => {
      this.projects = data;
    });

    // this.userService.get(PROJECT_API, this.id).subscribe(data => {
    //   this.id = data;
    // })
  }

}
