export class Store {
  name: string;
  coordinates: {
    long: number,
    lat: number
  };

  constructor(values: Object = {}) {
    this.name = values['l2_declaree'];
    this.coordinates = {
      lat: values['coordonnees'][0],
      long: values['coordonnees'][1]
    };
  }
}
