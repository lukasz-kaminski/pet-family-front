import { Component, OnInit } from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'pet-add-form',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent implements OnInit {

  kinds = ['DOG', 'CAT']

  model = new Pet(0, "", "", this.kinds[0])

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.httpClient.post<Pet>("http://localhost:8080/pets", this.model)
      .subscribe((response: Pet) => {
        this.router.navigate(['/pets'])
      });
  }

}
