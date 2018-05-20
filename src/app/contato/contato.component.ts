import { Component, OnInit } from '@angular/core';

import {Citation}    from '../citation';
import { CitationsService } from '../citations.service';



import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';






@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  
  
  
})
export class ContatoComponent implements OnInit {
  
   nome:string;
   msg:string;
   email:string;


  constructor(private citationsService:CitationsService, public dialog:MatDialog) { }

  ngOnInit() {
  }

  sendEmail():void{
    
    this.citationsService.postEmail(this.msg,this.email,this.nome).subscribe();
    
    let dialogRef = this.dialog.open(DialogModalComponent, {
      width: '250px',
      data: { name: this.nome}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

    
  }

  
}






