import { createAction, props } from '@ngrx/store';
import {practitionerAssigment} from '../../models/practitioner.assignement.model';

export enum PracticeActionTypes {
  LOAD_PRACTICES = '[Practitioner] Load Practitioners',
  RESET_PRACTICES = '[Practitioner] Reset Practitioners',
  LOAD_SUCCESS = '[Practitioner] Load Practitioners Success',
  LOAD_ERROR = '[Practitioner] Load Practitioners Failure',

  LOAD_AVAILABLE_PRACTICES = '[Practitioner] Load available Practitioners',
  LOAD_AVAILABLE_SUCCESS = '[Practitioner] Load available Practitioners Success',
  LOAD_AVAILABLE_ERROR = '[Practitioner] Load available Practitioners Failure',

  ASSOCIATE_PRACTICES = '[Practitioner] Associate Practitioners',
  DISASSOCIATE_PRACTICE = '[Practitioner] Disassociate Practitioner',
  DISASSOCIATE_PRACTICES = '[Practitioner] Disassociate Practitioners'
}

export const loadPractitioners = createAction(PracticeActionTypes.LOAD_PRACTICES);
export const resetPractitioners = createAction(PracticeActionTypes.RESET_PRACTICES);

export const loadPractitionersSuccess = createAction(PracticeActionTypes.LOAD_SUCCESS, props<{ entities: practitionerAssigment[] }>());

export const loadPractitionersFailure = createAction(PracticeActionTypes.LOAD_ERROR, props<{ error: any }>());

export const loadAvailablePractitioners = createAction(PracticeActionTypes.LOAD_AVAILABLE_PRACTICES);

export const loadAvailablePractitionersSuccess = createAction(
  PracticeActionTypes.LOAD_AVAILABLE_SUCCESS,
  props<{ entities: practitionerAssigment[] }>()
);

export const loadAvailablePractitionersFailure = createAction(PracticeActionTypes.LOAD_AVAILABLE_ERROR, props<{ error: any }>());

export const associatePractitioners = createAction(PracticeActionTypes.ASSOCIATE_PRACTICES, props<{ payload: practitionerAssigment[] }>());
export const disassociatePractitioner = createAction(
  PracticeActionTypes.DISASSOCIATE_PRACTICE,
  props<{ payload: practitionerAssigment }>()
);
export const disassociatePractitioners = createAction(
  PracticeActionTypes.DISASSOCIATE_PRACTICES,
  props<{ payload: practitionerAssigment[] }>()
);
