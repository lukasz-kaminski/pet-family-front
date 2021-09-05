import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pet} from "./shared/models/pet.model";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {contentHeaders} from "./http-config";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<Pet> {
    return this.httpClient.get<Pet>('http://localhost:8080/pets/' + id, {headers: contentHeaders})
  }

  getAll(): Observable<[Pet]> {
    return this.httpClient.get<[Pet]>(environment.backendUrl + '/pets', {headers: contentHeaders})
  }

  create(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(environment.backendUrl + '/pets', pet, {headers: contentHeaders})
  }
}
