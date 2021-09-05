import {Component, OnInit} from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {environment} from "../../environments/environment";
import {PetService} from "../pet.service";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets?:[Pet]

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getAll().subscribe((pets:[Pet]) => {
        this.pets = pets;
      })
  }

}
