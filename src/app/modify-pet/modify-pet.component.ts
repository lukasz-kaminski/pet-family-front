import { Component, OnInit } from '@angular/core';
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../shared/models/pet.model";

@Component({
  selector: 'app-modify-pet',
  templateUrl: './modify-pet.component.html',
  styleUrls: ['./modify-pet.component.scss']
})
export class ModifyPetComponent implements OnInit {

  pet?: Pet;
  sub: any;

  kinds = [
    {
      enumValue: 'DOG',
      niceName: 'dog'
    },
    {
      enumValue: 'CAT',
      niceName: 'cat'
    }
  ]
  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number

      this.petService.getById(id).subscribe((pet: Pet) => {
        this.pet = pet;
      });
    });
  }

  submit() {

  }

  handleUpload(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(this.pet != undefined) {
          this.pet.image = reader.result;
        }
      };
  }
}
