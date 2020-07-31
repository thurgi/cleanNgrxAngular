import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {PractitionerModel} from '../../models/practitioner.model';


// todo securiser ça
export const getPractitionerSelector = createFeatureSelector('CleanNgrxAngularStoreModule');

export const getPractitioner = createSelector(
  getPractitionerSelector,
  (state: PractitionerAssigment): PractitionerModel => state.practitioner
);

export const selectPractitioner  = createSelector(
  getPractitioner,
  (state: PractitionerModel) => state
);

export const selectPractitionerName = createSelector(
  getPractitioner,
  (state: PractitionerModel) => {  console.log(); return state?.name; }
);
