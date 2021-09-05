import { Component, OnInit } from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets?:[Pet]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<[Pet]>("http://localhost:8080/pets")
      .subscribe((pets:[Pet]) => {
        this.pets = pets;
      })
  }

}
