import {createReducer, on} from '@ngrx/store';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {PractitionerActions} from './practitioner.actions';

const practitionerActions = new PractitionerActions();
const initialState: PractitionerAssigment = {
  practitioner: null,
  healthcare: null,
  id: null
};

export const practitionerReducer = createReducer(
  initialState,
  on(practitionerActions.reset, (state: PractitionerAssigment): PractitionerAssigment => ({
      practitioner: null,
      healthcare: null,
      id: null
    })
  ),
  on(practitionerActions.associateHealthcare, (state: PractitionerAssigment, {healthcare}): PractitionerAssigment => {
    state.healthcare = healthcare;
    return state;
  }),
  on(practitionerActions.disassociateHealthcare, state => {
      state.healthcare = null;
      return state;
    }
  )
);
