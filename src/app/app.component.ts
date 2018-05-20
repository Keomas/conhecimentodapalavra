import { Component, OnInit, ViewChild  } from '@angular/core';



import { CitationsService } from './citations.service';
import { Citation }         from './citation';

import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public citationArray:Citation[];
  
  
  constructor(private citationsService:CitationsService){}
  

  

  getMenuLeft():void{
    this.citationsService.getCitations().subscribe(citations => this.citationArray=citations);
    
  }
  
  ngOnInit(): void {
    this.getMenuLeft();
  
  }

  

 
  title = 'Conhecimento da Palavra';
}
