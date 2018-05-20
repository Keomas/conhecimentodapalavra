import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CitationsComponent}     from './citations/citations.component';
import {ContatoComponent}      from './contato/contato.component';
import { PainelcitationComponent } from './painelcitation/painelcitation.component'; 
import {SearchCitationComponent}   from './search-citation/search-citation.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: CitationsComponent },
    {path:'contato', component:ContatoComponent},
    {path:'painel/:id',  component:PainelcitationComponent},
    {path:'search',  component:SearchCitationComponent}
   
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}