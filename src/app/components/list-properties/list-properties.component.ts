import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';

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
  public term: string;
  searching = false;

  constructor(private route: ActivatedRoute,
              private router: Router, private userService: ServiceService) {
  }

  ngOnInit(): void {
    this.userService.searchAllColumn(PRODUCT_API, '').subscribe(data => {
      console.log(data.hits.hits);
      this.properties = data.hits.hits;
    });
    // this.userService.getAll(PRODUCT_API).subscribe(data => {
    // });
  }

  onSearchChange(value) {
    // console.log(value);
    this.userService.searchAllColumn(PRODUCT_API, value).subscribe(data => {
      // console.log(data.hits.hits);
      this.properties = data.hits.hits;
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(() =>
        this.userService.post(PRODUCT_API + '/getHints', this.term).pipe()
      ),
      tap(() => this.searching = false)
    );

  suggest() {

  }
}
