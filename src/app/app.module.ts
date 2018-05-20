import {MatMenuModule, MatButtonModule,MatDatepickerModule,MatSidenavModule,
  MatToolbarModule,MatIconModule,MatListModule, MatCardModule, MatFormFieldModule, MatInputModule,MatDialogModule
} from '@angular/material';

import { ShareButtonsModule }  from 'ngx-sharebuttons';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CitationsComponent } from './citations/citations.component';

import {CitationsService }   from './citations.service';


import { AppRoutingModule }     from './app-routing.module';
import { ContatoComponent } from './contato/contato.component';
import { PainelcitationComponent } from './painelcitation/painelcitation.component';
import { EditcitationPipe } from './editcitation.pipe';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { SearchCitationComponent } from './search-citation/search-citation.component';
  @NgModule({
  declarations: [
    AppComponent,
    CitationsComponent,
    ContatoComponent,
    PainelcitationComponent,
    EditcitationPipe,
    DialogModalComponent,
    SearchCitationComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpModule,
    HttpClientModule,
    
    ShareButtonsModule.forRoot()
    
    
  ],
  providers: [CitationsService,HttpClientModule],
  entryComponents: [ContatoComponent,DialogModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
