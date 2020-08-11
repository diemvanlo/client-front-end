import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

const NEWS_API = "https://fxteam-back-end.herokuapp.com/api/news";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news: Array<any>;
  private term: string;

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {
    this.userService.getAll(NEWS_API).subscribe(data =>{
      this.news = data;
    })
  }

}
