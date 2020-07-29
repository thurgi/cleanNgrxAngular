import {PractitionerModel} from './practitioner.model';
import {HealthcareModel} from './healthcare.model';

export interface PractitionerAssigment {
  id: string;
  practitioner: PractitionerModel;
  healthcare: HealthcareModel;
}
