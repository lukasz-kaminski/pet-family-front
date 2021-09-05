import { Component, OnInit } from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets?:[Pet]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<[Pet]>(environment.backendUrl + '/pets')
      .subscribe((pets:[Pet]) => {
        this.pets = pets;
      })
  }

}
