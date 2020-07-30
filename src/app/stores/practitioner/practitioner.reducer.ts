import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {StoreReducerInterface} from '../../../libCommon/store.reducer.interface';

export const initialState: PractitionerAssigment = {
  practitioner: null,
  healthcare: null,
  id: null
};

export const practitionerReducer: StoreReducerInterface = {
  initialState,
  reset: (state: PractitionerAssigment): PractitionerAssigment => ({
    practitioner: null,
    healthcare: null,
    id: null
  }),
  associateHealthcare: (state: PractitionerAssigment, {healthcare}): PractitionerAssigment => {
    state.healthcare = healthcare;
    return state;
  },
  disassociateHealthcare: state => {
    state.healthcare = null;
    return state;
  }
};
