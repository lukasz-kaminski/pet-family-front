import {Component, OnInit} from '@angular/core';
import {Pet} from "../shared/models/pet.model";
import {Router} from "@angular/router";
import {PetService} from "../pet.service";

@Component({
  selector: 'pet-add-form',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent implements OnInit {

  kinds = ['DOG', 'CAT']

  model = new Pet(0, "", "", this.kinds[0])

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.petService.create(this.model).subscribe(() => {
        this.router.navigate(['/pets'])
      });
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.model.image = reader.result;
    };
  }
}
