import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { RegionSelectComponent } from './region-select/region-select.component';
import { RegionSelectDialogComponent } from './region-select-dialog/region-select-dialog.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { OrderCallComponent } from './order-call/order-call.component';
import { OrderCallDialogComponent } from './order-call-dialog/order-call-dialog.component';
import { SearchComponent } from './search/search.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { SigninComponent } from './signin/signin.component';
import { SigninDialogComponent } from './signin-dialog/signin-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionSelectComponent,
    RegionSelectDialogComponent,
    AutocompleteComponent,
    OrderCallComponent,
    OrderCallDialogComponent,
    SearchComponent,
    SearchDialogComponent,
    SigninComponent,
    SigninDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
