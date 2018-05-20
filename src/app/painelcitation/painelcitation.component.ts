import { Component, OnInit, OnChanges,DoCheck, AfterViewChecked,Input  } from '@angular/core';
import {Citation}            from '../citation';

import {ActivatedRoute }  from '@angular/router';
import { Location }       from '@angular/common';
import { CitationsService }   from '../citations.service';

@Component({
  selector: 'app-painelcitation',
  templateUrl: './painelcitation.component.html',
  styleUrls: ['./painelcitation.component.css']
})
export class PainelcitationComponent implements   OnInit{
@Input() SelectedCitation:Citation;
  
  
  constructor(private route:ActivatedRoute,
              private location:Location,
              private citationService:CitationsService
            ){ }

  
      ngOnInit():void{
          this.route.params.subscribe(
            params =>{
              const id =+this.route.snapshot.paramMap.get('id');
              this.citationService.getCitationById(id).subscribe(Citation=>this.SelectedCitation=Citation);
            }
          );
            }
 
  
  


  getCitation():void{
  
    var id = +this.route.snapshot.paramMap.get('id');
    this.citationService.getCitationById(id).subscribe(citation => this.SelectedCitation=citation);
    
    
  }

}
