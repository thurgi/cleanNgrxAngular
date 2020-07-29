import {PractitionerModel} from './practitioner.model';

export interface HealthcareModel {
  id: string;
  practitioners: PractitionerModel[];
}
