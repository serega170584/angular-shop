import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {
  searchControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<SearchDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }

  ngOnInit(): void {
  }
}
