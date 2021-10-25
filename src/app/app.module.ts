import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {routerConfig} from "./top-menu.config";
import { PetComponent } from './pet/pet.component';
import {HttpClientModule} from "@angular/common/http";
import { PetAddComponent } from './pet-add/pet-add.component';
import {FormsModule} from "@angular/forms";
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ModifyPetComponent } from './modify-pet/modify-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    PetAddComponent,
    ListPetsComponent,
    ModifyPetComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
