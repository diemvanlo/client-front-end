import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpsServiceService} from '../../service/https-service.service';
import {environment} from '../../../environments/environment.prod';

const AGENT_API = environment.apiEndpoint + '/api/agent';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  public agent: Array<any>

  constructor(private router: Router, private userService: HttpsServiceService) { }

  ngOnInit(): void {
    //Load Init
    this.getAll();
  }

  getAll(){
    this.userService.getAll(AGENT_API).subscribe(data => {
      this.agent = data;
    })
  }

  previewDetailAgent(id: string){
    this.router.navigate(['/list-agent/view-detail-agent/'], {queryParams: {id: id}});
  }

}
