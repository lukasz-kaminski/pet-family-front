import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pet} from "../shared/models/pet.model";
import {PetService} from "../pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit, OnDestroy {

  pet?:Pet;
  sub:any;

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number

      this.petService.getById(id).subscribe((pet: Pet) => {
          this.pet = pet;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
