export enum ProjectType {
  CONDO = "Condo"
}

export enum OwnershipType {
  FREEHOLD = "Freehold"
}

export interface Ad {
  pic: string;
  title: string;
  address: string;
  project_type: ProjectType;
  year: number;
  ownership_type: OwnershipType;
  psf_min: number;
  psf_max: number;
  subprice_label: string;
  availabilities_label: string;
  description: string;
}
