import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let configDialog = new MatDialogConfig();
    configDialog.width = '300px';
    configDialog.height = 'auto';
    configDialog.data = 'This text is passed into the dialog!';
    configDialog.panelClass = 'dialog-demo';
    configDialog.hasBackdrop = true;

    this.dialog
      .open(DialogDemoComponent, configDialog)
      .afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.result = result;
      });
  }
}
