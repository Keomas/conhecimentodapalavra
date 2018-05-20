import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Citation } from '../citation';
import { CitationsService } from '../citations.service';


@Component({
  selector: 'app-search-citation',
  templateUrl: './search-citation.component.html',
  styleUrls: ['./search-citation.component.css']
})
export class SearchCitationComponent implements OnInit {

  citations$: Observable<Citation[]>;
  private searchTerms = new Subject<string>();

  constructor(private citationService: CitationsService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.citations$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.citationService.searchHeroes(term)),
    );
  }
}