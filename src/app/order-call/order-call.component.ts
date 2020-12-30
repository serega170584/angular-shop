import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderCallDialogComponent } from '../order-call-dialog/order-call-dialog.component';

@Component({
  selector: 'app-order-call',
  templateUrl: './order-call.component.html',
  styleUrls: ['./order-call.component.css']
})
export class OrderCallComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderCallDialogComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

  ngOnInit(): void {
  }
}
