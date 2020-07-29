import { createAction, props } from '@ngrx/store';
import {HealthcareModel} from '../../models/healthcare.model';

export enum PractitionerAssignementActionTypes {
  LOAD_PRACTICES = '[Practitioner] Load Practitioners',
  RESET = '[Practitioner] Reset Practitioners',

  ASSOCIATE_PRACTICES = '[Practitioner] Associate Practitioners',
  DISASSOCIATE_PRACTICE = '[Practitioner] Disassociate Practitioner',
}

export const loadPractitioners = createAction(PractitionerAssignementActionTypes.LOAD_PRACTICES);

export const reset = createAction(PractitionerAssignementActionTypes.RESET);
export const associatePractitioners = createAction(
  PractitionerAssignementActionTypes.ASSOCIATE_PRACTICES,
  props<{ healthcare: HealthcareModel }>()
);
export const disassociatePractitioner = createAction(PractitionerAssignementActionTypes.DISASSOCIATE_PRACTICE);
