import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PetComponent} from "./pet/pet.component";
import {PetAddComponent} from "./pet-add/pet-add.component";
import {ListPetsComponent} from "./list-pets/list-pets.component";
import {ModifyPetComponent} from "./modify-pet/modify-pet.component";

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pets/add',
    component: PetAddComponent
  },
  {
    path: 'pets/:id',
    component: PetComponent
  },
  {
    path: 'pets/:id/edit',
    component: ModifyPetComponent
  },
  {
    path: 'pets',
    component: ListPetsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
