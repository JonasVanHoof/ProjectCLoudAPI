  export interface Meta {
      code: number;
      requestId: string;
  }

  export interface LabeledLatLng {
      label: string;
      lat: number;
      lng: number;
  }

  export interface Location {
      crossStreet: string;
      lat: number;
      lng: number;
      labeledLatLngs: LabeledLatLng[];
      distance: number;
      cc: string;
      country: string;
      formattedAddress: string[];
      address: string;
      postalCode: string;
      city: string;
      state: string;
  }

  export interface Icon {
      prefix: string;
      suffix: string;
  }

  export interface Category {
      id: string;
      name: string;
      pluralName: string;
      shortName: string;
      icon: Icon;
      primary: boolean;
  }

  export interface VenuePage {
      id: string;
  }

  export interface Venue {
      id: string;
      name: string;
      location: Location;
      categories: Category[];
      referralId: string;
      hasPerk: boolean;
      venuePage: VenuePage;
  }

  export interface Response {
      venues: Venue[];
      confident: boolean;
  }

  export interface RootObject {
      meta: Meta;
      response: Response;
  }
