import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CitationsService}    from '../citations.service';
import {Citation}            from '../citation';



@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})

export class CitationsComponent implements OnInit {
 
  public citationsList:Citation[];
  public href:String="";
  constructor(private citationsService:CitationsService, private router:Router) {
    this.href = window.location.hostname;

   }

   getBody():void{
    this.citationsService.getCitationsMiddle().subscribe(citationMenu => this.citationsList=citationMenu.filter(cite => cite.id <= 3) );
   }
  
  
  ngOnInit() {
  this.getBody();

  
  }

}
