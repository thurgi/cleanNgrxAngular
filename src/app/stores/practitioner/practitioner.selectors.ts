import { createFeatureSelector, createSelector } from '@ngrx/store';
import {adapter, getSelectedPractitionerId, PRACTITIONER_FEATURE_KEY, State} from './practitioner.reducer';

// get the selectors
const {selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors();


export const selectPractitionerState = createFeatureSelector<State>(PRACTITIONER_FEATURE_KEY);

export const selectPractitionerIds = createSelector(
  selectPractitionerState,
  selectIds
);
export const selectPractitionerEntities = createSelector(selectPractitionerState, selectEntities);
export const selectAllPractitioners = createSelector(selectPractitionerState, selectAll);
export const selectPractitionerTotal = createSelector(selectPractitionerState, selectTotal);
export const selectCurrentPractitionerId = createSelector(selectPractitionerState, getSelectedPractitionerId);


