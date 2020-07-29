import { createSelector } from '@ngrx/store';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {PractitionerModel} from '../../models/practitioner.model';

export const getPractitioner = (state: PractitionerAssigment): PractitionerModel => state.practitioner;

export const selectPractitionerName = createSelector(
  getPractitioner,
  (state: PractitionerModel) => state.name
);
