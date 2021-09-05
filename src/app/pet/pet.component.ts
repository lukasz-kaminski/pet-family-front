import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Pet} from "../shared/models/pet.model";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit, OnDestroy {

  id:any;
  pet:any;
  sub:any;

  constructor(private http : HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.http.get<Pet>('http://localhost:8080/pets/' + this.id)
        .subscribe((response: Pet) => {

          console.log(response);
          this.pet = response;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
