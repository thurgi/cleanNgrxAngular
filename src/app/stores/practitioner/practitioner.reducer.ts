import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {StoreReducerInterface} from '../../../libCommon/store.reducer.interface';
import {PractitionerModel} from '../../models/practitioner.model';

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
  },
  loadPractitioners: (state: PractitionerAssigment, data): PractitionerAssigment => {
    return state;
  },
  loadPractitionersSuccess: (state: PractitionerAssigment, data: PractitionerModel[]): PractitionerAssigment => {
    return { ...state, practitioner: data[0]};
  },
  updatePractitionerName: (state: PractitionerAssigment, {name}): PractitionerAssigment => {
    return { ...state, practitioner: { ...state.practitioner, name}};
  }
};
