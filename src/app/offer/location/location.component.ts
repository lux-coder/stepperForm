import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public start: string;
  public finish: string;


  constructor() { 
    this.start = "45.815399,15.966568";
    this.finish = "43.508133,16.440193";
   }

  ngOnInit(): void {
  }

}
