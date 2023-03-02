import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './store/coffee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffect } from './store/coffee.effect';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComponent } from '../common/header/header.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CoffeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('coffeeDetails', coffeeReducer),
    EffectsModule.forRoot({}),
    EffectsModule.forFeature([CoffeeEffect]),
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class CoffeeModule {}
