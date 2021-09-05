export class Pet {
  id: number;
  name: string;
  race: string;
  kind: string;

  constructor(id: number, name: string, race: string, kind: string) {
    this.id = id;
    this.name = name;
    this.race = race;
    this.kind = kind;
  }
}
