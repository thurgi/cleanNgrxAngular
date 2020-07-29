import {createReducer, on} from '@ngrx/store';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {reset, associatePractitioners, disassociatePractitioner} from './practitioner.actions';

const initialState: PractitionerAssigment = {
  practitioner: null,
  healthcare: null,
  id: null
};


export const practitionerReducer = createReducer(
  initialState,
  on(reset, (state: PractitionerAssigment): PractitionerAssigment => ({
      practitioner: null,
      healthcare: null,
      id: null
    })
  ),
  on(associatePractitioners, (state: PractitionerAssigment, {healthcare}): PractitionerAssigment => {
    state.healthcare = healthcare;
    return state;
  }),
  on(disassociatePractitioner, state => {
      state.healthcare = null;
      return state;
    }
  )
);
