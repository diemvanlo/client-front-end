import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;
declare const pano2vrPlayer: any;
declare const pano2vrSkin: any;

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    let pano = new pano2vrPlayer('containerPano');
    let skin = new pano2vrSkin(pano);
    pano.readConfigUrlAsync('assets/pano.xml');
  }

  ngOnInit(): void {
  }

}
