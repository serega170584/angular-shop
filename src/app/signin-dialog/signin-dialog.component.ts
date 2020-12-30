import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent implements OnInit {
  loginControl = new FormControl();
  passwordControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<SigninDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }

  ngOnInit(): void {
  }

}
