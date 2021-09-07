export class Pet {
  id: number;
  name: string;
  breed: string;
  kind: string;

  constructor(id: number, name: string, breed: string, kind: string) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.kind = kind;
  }
}
