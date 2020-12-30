import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-order-call-dialog',
  templateUrl: './order-call-dialog.component.html',
  styleUrls: ['./order-call-dialog.component.css']
})
export class OrderCallDialogComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);
  agree = new FormControl('', [Validators.required]);

  filteredOptions!: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<OrderCallDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getNameErrorMessage() {
    let errors: string = '';
    if (this.name.hasError('required')) {
      errors = 'Вы должны ввести имя';
    }

    return errors;
  }

  getTelephoneErrorMessage() {
    let errors: string = '';
    if (this.telephone.hasError('required')) {
      errors += 'Вы должны ввести телефон';
    }

    return errors;
  }

  hasErrors() {
    return this.name.hasError('required') || this.telephone.hasError('required') || this.agree.hasError('required');
  }
}
