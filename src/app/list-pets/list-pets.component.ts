import {Component, OnInit} from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {PetService} from "../pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets?:[Pet]

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.petService.getAll().subscribe((pets:[Pet]) => {
        this.pets = pets;
      })
  }

  showSingle(pet: Pet) {
    this.router.navigate(["/pets", pet.id])
  }
}
